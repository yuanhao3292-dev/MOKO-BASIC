import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql, toCamelCase } from '../_lib/db';
import { getSessionFromRequest, handleCors } from '../_lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSessionFromRequest(req);

    if (!session) {
      return res.status(200).json({
        user: null,
        isAuthenticated: false,
      });
    }

    // Fetch full user data from database
    const result = await sql`
      SELECT
        u.id,
        u.email,
        u.name,
        u.phone,
        u.preferred_language,
        u.amazon_customer_id,
        u.created_at,
        u.last_login_at,
        COALESCE(pb.current_balance, 0) as points_balance
      FROM users u
      LEFT JOIN point_balances pb ON pb.user_id = u.id
      WHERE u.id = ${session.userId}
      AND u.deleted_at IS NULL
    `;

    if (result.rows.length === 0) {
      return res.status(200).json({
        user: null,
        isAuthenticated: false,
      });
    }

    const user = toCamelCase(result.rows[0]);

    // Fetch user's primary pet
    const petResult = await sql`
      SELECT * FROM pets
      WHERE user_id = ${session.userId}
      AND is_primary = true
      LIMIT 1
    `;

    const primaryPet = petResult.rows.length > 0 ? toCamelCase(petResult.rows[0]) : null;

    res.status(200).json({
      user: {
        ...user,
        provider: user.amazonCustomerId ? 'AMAZON' : 'EMAIL',
        // Legacy fields for backwards compatibility
        petName: primaryPet?.name || null,
        petWeight: primaryPet?.weightKg || null,
      },
      isAuthenticated: true,
    });
  } catch (error) {
    console.error('Session check error:', error);
    res.status(500).json({
      error: 'Internal server error',
      user: null,
      isAuthenticated: false,
    });
  }
}
