import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleCors } from '../../_lib/auth';

// Amazon OAuth configuration
const AMAZON_CLIENT_ID = process.env.AMAZON_CLIENT_ID;
const AMAZON_AUTHORIZE_URL = 'https://www.amazon.com/ap/oa';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!AMAZON_CLIENT_ID) {
    return res.status(500).json({
      error: 'Configuration error',
      message: 'Amazon OAuth is not configured. Please set AMAZON_CLIENT_ID environment variable.',
    });
  }

  // Get the redirect URI from request or use default
  const { redirect_uri, state } = req.method === 'POST' ? req.body : req.query;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const callbackUrl = `${baseUrl}/api/auth/amazon/callback`;

  // Generate a random state for CSRF protection if not provided
  const authState = state || crypto.randomUUID();

  // Build the Amazon authorization URL
  const params = new URLSearchParams({
    client_id: AMAZON_CLIENT_ID,
    scope: 'profile postal_code',
    response_type: 'code',
    redirect_uri: callbackUrl,
    state: authState,
  });

  const authorizationUrl = `${AMAZON_AUTHORIZE_URL}?${params.toString()}`;

  // Return the URL for the frontend to redirect to
  res.status(200).json({
    authorization_url: authorizationUrl,
    state: authState,
  });
}
