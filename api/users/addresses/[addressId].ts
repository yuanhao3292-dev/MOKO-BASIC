import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { getSessionFromRequest, handleCors } from '../../_lib/auth';
import { toCamelCase } from '../../_lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  if (handleCors(req, res)) return;

  try {
    // Require authentication
    const session = await getSessionFromRequest(req);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { addressId } = req.query;

    if (!addressId || typeof addressId !== 'string') {
      return res.status(400).json({ error: 'Address ID is required' });
    }

    // Verify address belongs to user
    const existingAddress = await sql`
      SELECT * FROM shipping_addresses
      WHERE id = ${addressId} AND user_id = ${session.userId}
    `;

    if (existingAddress.rows.length === 0) {
      return res.status(404).json({ error: 'Address not found' });
    }

    if (req.method === 'GET') {
      return res.status(200).json(toCamelCase(existingAddress.rows[0]));
    }

    if (req.method === 'PUT') {
      // Update address
      const {
        recipientName,
        postalCode,
        prefecture,
        city,
        addressLine1,
        addressLine2,
        phone,
        isDefault,
      } = req.body;

      // If setting as default, unset other default addresses
      if (isDefault) {
        await sql`
          UPDATE shipping_addresses
          SET is_default = false
          WHERE user_id = ${session.userId} AND id != ${addressId}
        `;
      }

      const result = await sql`
        UPDATE shipping_addresses
        SET
          recipient_name = COALESCE(${recipientName}, recipient_name),
          postal_code = COALESCE(${postalCode}, postal_code),
          prefecture = COALESCE(${prefecture}, prefecture),
          city = COALESCE(${city}, city),
          address_line1 = COALESCE(${addressLine1}, address_line1),
          address_line2 = COALESCE(${addressLine2}, address_line2),
          phone = COALESCE(${phone}, phone),
          is_default = COALESCE(${isDefault}, is_default),
          updated_at = NOW()
        WHERE id = ${addressId} AND user_id = ${session.userId}
        RETURNING *
      `;

      return res.status(200).json(toCamelCase(result.rows[0]));
    }

    if (req.method === 'DELETE') {
      // Delete address
      const wasDefault = existingAddress.rows[0].is_default;

      await sql`
        DELETE FROM shipping_addresses
        WHERE id = ${addressId} AND user_id = ${session.userId}
      `;

      // If deleted address was default, set another address as default
      if (wasDefault) {
        await sql`
          UPDATE shipping_addresses
          SET is_default = true
          WHERE user_id = ${session.userId}
          AND id = (
            SELECT id FROM shipping_addresses
            WHERE user_id = ${session.userId}
            ORDER BY created_at ASC
            LIMIT 1
          )
        `;
      }

      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Address API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
