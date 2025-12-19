import { SignJWT, jwtVerify, JWTPayload } from 'jose';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// JWT configuration
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'moko-basic-dev-secret-change-in-production'
);
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds

export interface SessionPayload extends JWTPayload {
  userId: string;
  email: string;
  name: string;
  amazonCustomerId?: string;
  sessionId: string;
}

// Create a new JWT session token
export async function createSessionToken(payload: Omit<SessionPayload, 'sessionId'>): Promise<string> {
  const sessionId = crypto.randomUUID();

  const token = await new SignJWT({
    ...payload,
    sessionId,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(`${SESSION_DURATION}s`)
    .setIssuedAt()
    .sign(JWT_SECRET);

  return token;
}

// Verify and decode a session token
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as SessionPayload;
  } catch {
    return null;
  }
}

// Cookie configuration
const COOKIE_NAME = 'moko_session';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: SESSION_DURATION,
  path: '/',
};

// Set session cookie
export function setSessionCookie(res: VercelResponse, token: string) {
  const cookieValue = `${COOKIE_NAME}=${token}; HttpOnly; ${COOKIE_OPTIONS.secure ? 'Secure; ' : ''}SameSite=${COOKIE_OPTIONS.sameSite}; Max-Age=${COOKIE_OPTIONS.maxAge}; Path=${COOKIE_OPTIONS.path}`;
  res.setHeader('Set-Cookie', cookieValue);
}

// Clear session cookie
export function clearSessionCookie(res: VercelResponse) {
  const cookieValue = `${COOKIE_NAME}=; HttpOnly; ${COOKIE_OPTIONS.secure ? 'Secure; ' : ''}SameSite=${COOKIE_OPTIONS.sameSite}; Max-Age=0; Path=${COOKIE_OPTIONS.path}`;
  res.setHeader('Set-Cookie', cookieValue);
}

// Get session from request
export function getSessionFromRequest(req: VercelRequest): string | null {
  const cookies = req.headers.cookie;
  if (!cookies) return null;

  const cookieMap = cookies.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return cookieMap[COOKIE_NAME] || null;
}

// Middleware to require authentication
export async function requireAuth(
  req: VercelRequest,
  res: VercelResponse
): Promise<SessionPayload | null> {
  const token = getSessionFromRequest(req);

  if (!token) {
    res.status(401).json({ error: 'Unauthorized', message: 'No session token provided' });
    return null;
  }

  const session = await verifySessionToken(token);

  if (!session) {
    clearSessionCookie(res);
    res.status(401).json({ error: 'Unauthorized', message: 'Invalid or expired session' });
    return null;
  }

  return session;
}

// Get optional auth (doesn't require, but returns user if authenticated)
export async function getOptionalAuth(req: VercelRequest): Promise<SessionPayload | null> {
  const token = getSessionFromRequest(req);
  if (!token) return null;
  return verifySessionToken(token);
}

// CORS headers for API routes
export function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
}

// Handle OPTIONS requests for CORS
export function handleCors(req: VercelRequest, res: VercelResponse): boolean {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }

  return false;
}
