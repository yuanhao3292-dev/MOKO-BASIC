import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { requireAuth, handleCors, getSessionFromRequest } from '../_lib/auth';
import { toCamelCase } from '../_lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  if (handleCors(req, res)) return;

  try {
    // Require authentication
    const session = await getSessionFromRequest(req);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method === 'GET') {
      // Get user profile with related data
      const userResult = await sql`
        SELECT
          u.id,
          u.email,
          u.name,
          u.phone,
          u.preferred_language,
          u.amazon_customer_id,
          u.provider,
          u.created_at,
          u.updated_at,
          pb.current_balance as points_balance
        FROM users u
        LEFT JOIN point_balances pb ON u.id = pb.user_id
        WHERE u.id = ${session.userId}
      `;

      if (userResult.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = toCamelCase(userResult.rows[0]);

      // Get user's pets
      const petsResult = await sql`
        SELECT * FROM pets
        WHERE user_id = ${session.userId}
        ORDER BY is_primary DESC, created_at ASC
      `;
      const pets = petsResult.rows.map(toCamelCase);

      // Get user's addresses
      const addressesResult = await sql`
        SELECT * FROM shipping_addresses
        WHERE user_id = ${session.userId}
        ORDER BY is_default DESC, created_at ASC
      `;
      const addresses = addressesResult.rows.map(toCamelCase);

      return res.status(200).json({
        ...user,
        pets,
        addresses,
      });
    }

    if (req.method === 'PUT') {
      // Update user profile
      const { name, phone, preferredLanguage } = req.body;

      const result = await sql`
        UPDATE users
        SET
          name = COALESCE(${name}, name),
          phone = COALESCE(${phone}, phone),
          preferred_language = COALESCE(${preferredLanguage}, preferred_language),
          updated_at = NOW()
        WHERE id = ${session.userId}
        RETURNING id, email, name, phone, preferred_language, amazon_customer_id, provider, created_at, updated_at
      `;

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(toCamelCase(result.rows[0]));
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('User API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
