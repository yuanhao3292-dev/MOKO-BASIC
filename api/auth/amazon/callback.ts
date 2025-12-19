import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql, toCamelCase } from '../../_lib/db';
import { createSessionToken, setSessionCookie } from '../../_lib/auth';

// Amazon OAuth configuration
const AMAZON_CLIENT_ID = process.env.AMAZON_CLIENT_ID;
const AMAZON_CLIENT_SECRET = process.env.AMAZON_CLIENT_SECRET;
const AMAZON_TOKEN_URL = 'https://api.amazon.com/auth/o2/token';
const AMAZON_PROFILE_URL = 'https://api.amazon.com/user/profile';

interface AmazonTokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

interface AmazonProfile {
  user_id: string;
  email: string;
  name: string;
  postal_code?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, error, error_description } = req.query;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  // Handle OAuth errors
  if (error) {
    console.error('Amazon OAuth error:', error, error_description);
    return res.redirect(`${baseUrl}?auth_error=${encodeURIComponent(String(error_description || error))}`);
  }

  if (!code || typeof code !== 'string') {
    return res.redirect(`${baseUrl}?auth_error=missing_code`);
  }

  if (!AMAZON_CLIENT_ID || !AMAZON_CLIENT_SECRET) {
    console.error('Amazon OAuth not configured');
    return res.redirect(`${baseUrl}?auth_error=configuration_error`);
  }

  try {
    // Exchange code for tokens
    const callbackUrl = `${baseUrl}/api/auth/amazon/callback`;

    const tokenResponse = await fetch(AMAZON_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: AMAZON_CLIENT_ID,
        client_secret: AMAZON_CLIENT_SECRET,
        redirect_uri: callbackUrl,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Token exchange failed:', errorData);
      return res.redirect(`${baseUrl}?auth_error=token_exchange_failed`);
    }

    const tokens: AmazonTokenResponse = await tokenResponse.json();

    // Get user profile from Amazon
    const profileResponse = await fetch(AMAZON_PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    if (!profileResponse.ok) {
      console.error('Profile fetch failed:', await profileResponse.text());
      return res.redirect(`${baseUrl}?auth_error=profile_fetch_failed`);
    }

    const profile: AmazonProfile = await profileResponse.json();

    // Calculate token expiration time
    const tokenExpiresAt = new Date(Date.now() + tokens.expires_in * 1000);

    // Upsert user in database
    const result = await sql`
      INSERT INTO users (
        email,
        name,
        amazon_customer_id,
        amazon_access_token,
        amazon_refresh_token,
        amazon_token_expires_at,
        last_login_at
      ) VALUES (
        ${profile.email},
        ${profile.name},
        ${profile.user_id},
        ${tokens.access_token},
        ${tokens.refresh_token},
        ${tokenExpiresAt.toISOString()},
        NOW()
      )
      ON CONFLICT (amazon_customer_id)
      DO UPDATE SET
        email = EXCLUDED.email,
        name = EXCLUDED.name,
        amazon_access_token = EXCLUDED.amazon_access_token,
        amazon_refresh_token = EXCLUDED.amazon_refresh_token,
        amazon_token_expires_at = EXCLUDED.amazon_token_expires_at,
        last_login_at = NOW(),
        updated_at = NOW()
      RETURNING id, email, name, amazon_customer_id, preferred_language, created_at
    `;

    const user = toCamelCase(result.rows[0]);

    // Create point balance if new user
    await sql`
      INSERT INTO point_balances (user_id, current_balance, lifetime_earned, lifetime_spent)
      VALUES (${user.id as string}, 500, 500, 0)
      ON CONFLICT (user_id) DO NOTHING
    `;

    // Create session token
    const sessionToken = await createSessionToken({
      userId: user.id as string,
      email: user.email as string,
      name: user.name as string,
      amazonCustomerId: user.amazonCustomerId as string,
    });

    // Set session cookie
    setSessionCookie(res, sessionToken);

    // Redirect to member center with success
    res.redirect(`${baseUrl}?auth_success=true`);
  } catch (error) {
    console.error('Amazon OAuth callback error:', error);
    res.redirect(`${baseUrl}?auth_error=server_error`);
  }
}
