import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
import { getSessionFromRequest, handleCors } from '../../_lib/auth';
import { toCamelCase } from '../../_lib/db';

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

    const { petId } = req.query;

    if (!petId || typeof petId !== 'string') {
      return res.status(400).json({ error: 'Pet ID is required' });
    }

    // Verify pet belongs to user
    const existingPet = await sql`
      SELECT * FROM pets
      WHERE id = ${petId} AND user_id = ${session.userId}
    `;

    if (existingPet.rows.length === 0) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    if (req.method === 'GET') {
      return res.status(200).json(toCamelCase(existingPet.rows[0]));
    }

    if (req.method === 'PUT') {
      // Update pet
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
        isPrimary,
      } = req.body;

      // Calculate new recommended size if measurements changed
      const newWeightKg = weightKg !== undefined ? weightKg : existingPet.rows[0].weight_kg;
      const newNeckCm = neckCm !== undefined ? neckCm : existingPet.rows[0].neck_cm;
      const newChestCm = chestCm !== undefined ? chestCm : existingPet.rows[0].chest_cm;
      const recommendedSize = recommendSize(newWeightKg, newNeckCm, newChestCm);

      // If setting as primary, unset other primary pets
      if (isPrimary) {
        await sql`
          UPDATE pets
          SET is_primary = false
          WHERE user_id = ${session.userId} AND id != ${petId}
        `;
      }

      const result = await sql`
        UPDATE pets
        SET
          name = COALESCE(${name}, name),
          breed = COALESCE(${breed}, breed),
          weight_kg = COALESCE(${weightKg}, weight_kg),
          birth_date = COALESCE(${birthDate}, birth_date),
          gender = COALESCE(${gender}, gender),
          color = COALESCE(${color}, color),
          neck_cm = COALESCE(${neckCm}, neck_cm),
          chest_cm = COALESCE(${chestCm}, chest_cm),
          length_cm = COALESCE(${lengthCm}, length_cm),
          recommended_size = COALESCE(${recommendedSize}, recommended_size),
          photo_url = COALESCE(${photoUrl}, photo_url),
          is_primary = COALESCE(${isPrimary}, is_primary),
          updated_at = NOW()
        WHERE id = ${petId} AND user_id = ${session.userId}
        RETURNING *
      `;

      return res.status(200).json(toCamelCase(result.rows[0]));
    }

    if (req.method === 'DELETE') {
      // Delete pet
      const wasPrimary = existingPet.rows[0].is_primary;

      await sql`
        DELETE FROM pets
        WHERE id = ${petId} AND user_id = ${session.userId}
      `;

      // If deleted pet was primary, set another pet as primary
      if (wasPrimary) {
        await sql`
          UPDATE pets
          SET is_primary = true
          WHERE user_id = ${session.userId}
          AND id = (
            SELECT id FROM pets
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
    console.error('Pet API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
