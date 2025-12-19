import type { VercelRequest, VercelResponse } from '@vercel/node';
import { clearSessionCookie, handleCors } from '../_lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Clear the session cookie
  clearSessionCookie(res);

  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  });
}
