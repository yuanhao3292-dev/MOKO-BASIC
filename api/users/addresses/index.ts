import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { getSessionFromRequest, handleCors } from '../../_lib/auth';
import { toCamelCase } from '../../_lib/db';
import crypto from 'crypto';

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
      // Get all addresses for user
      const result = await sql`
        SELECT * FROM shipping_addresses
        WHERE user_id = ${session.userId}
        ORDER BY is_default DESC, created_at ASC
      `;

      return res.status(200).json({
        addresses: result.rows.map(toCamelCase),
      });
    }

    if (req.method === 'POST') {
      // Create new address
      const {
        recipientName,
        postalCode,
        prefecture,
        city,
        addressLine1,
        addressLine2,
        phone,
        isDefault = false,
      } = req.body;

      // Validate required fields
      if (!recipientName || !postalCode || !prefecture || !city || !addressLine1) {
        return res.status(400).json({
          error: 'Required fields: recipientName, postalCode, prefecture, city, addressLine1',
        });
      }

      // If this is default, unset other default addresses
      if (isDefault) {
        await sql`
          UPDATE shipping_addresses
          SET is_default = false
          WHERE user_id = ${session.userId}
        `;
      }

      // Check if this is the first address (make it default by default)
      const existingAddresses = await sql`
        SELECT COUNT(*) as count FROM shipping_addresses WHERE user_id = ${session.userId}
      `;
      const shouldBeDefault = isDefault || existingAddresses.rows[0].count === '0';

      const addressId = crypto.randomUUID();

      const result = await sql`
        INSERT INTO shipping_addresses (
          id, user_id, recipient_name, postal_code, prefecture, city,
          address_line1, address_line2, phone, is_default
        ) VALUES (
          ${addressId},
          ${session.userId},
          ${recipientName},
          ${postalCode},
          ${prefecture},
          ${city},
          ${addressLine1},
          ${addressLine2 || null},
          ${phone || null},
          ${shouldBeDefault}
        )
        RETURNING *
      `;

      return res.status(201).json(toCamelCase(result.rows[0]));
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Addresses API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
