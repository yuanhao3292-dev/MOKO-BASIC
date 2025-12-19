import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { getSessionFromRequest, handleCors } from '../../_lib/auth';
import { toCamelCase } from '../../_lib/db';
import crypto from 'crypto';

// Size recommendation logic based on measurements
function recommendSize(weightKg?: number, neckCm?: number, chestCm?: number): string | null {
  if (!weightKg && !chestCm) return null;

  // For toy poodles and small dogs
  if (weightKg) {
    if (weightKg <= 1.5) return 'XXS';
    if (weightKg <= 2.5) return 'XS';
    if (weightKg <= 3.5) return 'S';
    if (weightKg <= 5) return 'M';
    if (weightKg <= 7) return 'L';
    return 'XL';
  }

  // Based on chest measurement
  if (chestCm) {
    if (chestCm <= 25) return 'XXS';
    if (chestCm <= 30) return 'XS';
    if (chestCm <= 36) return 'S';
    if (chestCm <= 42) return 'M';
    if (chestCm <= 50) return 'L';
    return 'XL';
  }

  return null;
}

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
      // Get all pets for user
      const result = await sql`
        SELECT * FROM pets
        WHERE user_id = ${session.userId}
        ORDER BY is_primary DESC, created_at ASC
      `;

      return res.status(200).json({
        pets: result.rows.map(toCamelCase),
      });
    }

    if (req.method === 'POST') {
      // Create new pet
      const {
        name,
        breed,
        weightKg,
        birthDate,
        gender,
        color,
        neckCm,
        chestCm,
        lengthCm,
        photoUrl,
        isPrimary = false,
      } = req.body;

      if (!name) {
        return res.status(400).json({ error: 'Pet name is required' });
      }

      // Calculate recommended size
      const recommendedSize = recommendSize(weightKg, neckCm, chestCm);

      // If this is primary, unset other primary pets
      if (isPrimary) {
        await sql`
          UPDATE pets
          SET is_primary = false
          WHERE user_id = ${session.userId}
        `;
      }

      // Check if this is the first pet (make it primary by default)
      const existingPets = await sql`
        SELECT COUNT(*) as count FROM pets WHERE user_id = ${session.userId}
      `;
      const shouldBePrimary = isPrimary || existingPets.rows[0].count === '0';

      const petId = crypto.randomUUID();

      const result = await sql`
        INSERT INTO pets (
          id, user_id, name, breed, weight_kg, birth_date, gender, color,
          neck_cm, chest_cm, length_cm, recommended_size, photo_url, is_primary
        ) VALUES (
          ${petId},
          ${session.userId},
          ${name},
          ${breed || null},
          ${weightKg || null},
          ${birthDate || null},
          ${gender || null},
          ${color || null},
          ${neckCm || null},
          ${chestCm || null},
          ${lengthCm || null},
          ${recommendedSize},
          ${photoUrl || null},
          ${shouldBePrimary}
        )
        RETURNING *
      `;

      return res.status(201).json(toCamelCase(result.rows[0]));
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Pets API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
