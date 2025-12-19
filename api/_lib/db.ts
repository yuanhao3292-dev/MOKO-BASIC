import { sql } from '@vercel/postgres';

// Database initialization SQL
export const INIT_SQL = `
-- Users table with Amazon OAuth integration
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,

  -- Amazon OAuth fields
  amazon_customer_id VARCHAR(255) UNIQUE,
  amazon_access_token TEXT,
  amazon_refresh_token TEXT,
  amazon_token_expires_at TIMESTAMP,

  -- Profile fields
  phone VARCHAR(50),
  preferred_language VARCHAR(10) DEFAULT 'EN' CHECK (preferred_language IN ('EN', 'JP', 'ZH_TW')),

  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP,

  -- Soft delete
  deleted_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_amazon_customer_id ON users(amazon_customer_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Pets table for pet profile management
CREATE TABLE IF NOT EXISTS pets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Pet profile
  name VARCHAR(100) NOT NULL,
  breed VARCHAR(100) DEFAULT 'Toy Poodle',
  weight_kg DECIMAL(4,2),
  birth_date DATE,
  gender VARCHAR(10) CHECK (gender IN ('MALE', 'FEMALE')),
  color VARCHAR(50),

  -- Measurements for sizing
  neck_cm DECIMAL(5,2),
  chest_cm DECIMAL(5,2),
  length_cm DECIMAL(5,2),

  -- Recommended size (calculated)
  recommended_size VARCHAR(10) CHECK (recommended_size IN ('XS', 'S', 'M', 'L', 'XL')),

  -- Photo
  photo_url TEXT,

  -- Primary pet flag
  is_primary BOOLEAN DEFAULT false,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_pets_user_id ON pets(user_id);

-- Saved shipping addresses
CREATE TABLE IF NOT EXISTS shipping_addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Address details
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  postal_code VARCHAR(20) NOT NULL,
  prefecture VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,

  -- Flags
  is_default BOOLEAN DEFAULT false,

  -- Amazon Address ID (if synced from Amazon)
  amazon_address_id VARCHAR(255),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_shipping_addresses_user_id ON shipping_addresses(user_id);

-- Points balance table
CREATE TABLE IF NOT EXISTS point_balances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  current_balance INTEGER DEFAULT 0,
  lifetime_earned INTEGER DEFAULT 0,
  lifetime_spent INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Points transactions table (ledger)
CREATE TABLE IF NOT EXISTS point_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),

  -- Transaction details
  type VARCHAR(50) NOT NULL CHECK (type IN ('EARN', 'SPEND', 'EXPIRE', 'ADJUST', 'BONUS', 'REFUND')),
  amount INTEGER NOT NULL,
  balance_after INTEGER NOT NULL,

  -- Source reference
  reference_type VARCHAR(50),
  reference_id UUID,

  -- Description
  description TEXT,

  -- Expiration (for earned points)
  expires_at TIMESTAMP,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_point_transactions_user_id ON point_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_point_transactions_created_at ON point_transactions(created_at DESC);

-- Coupons table
CREATE TABLE IF NOT EXISTS coupons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(50) UNIQUE NOT NULL,

  -- Coupon type
  type VARCHAR(50) NOT NULL CHECK (type IN ('PERCENTAGE', 'FIXED_AMOUNT', 'FREE_SHIPPING')),
  value DECIMAL(10,2) NOT NULL,

  -- Restrictions
  minimum_order_amount DECIMAL(10,2) DEFAULT 0,
  maximum_discount_amount DECIMAL(10,2),

  -- Product restrictions (JSON array of product IDs or categories)
  applicable_products JSONB,
  applicable_categories JSONB,

  -- Usage limits
  max_uses INTEGER,
  max_uses_per_user INTEGER DEFAULT 1,
  current_uses INTEGER DEFAULT 0,

  -- Validity period
  starts_at TIMESTAMP NOT NULL,
  expires_at TIMESTAMP NOT NULL,

  -- Status
  is_active BOOLEAN DEFAULT true,

  -- For member-specific coupons
  user_id UUID REFERENCES users(id),

  -- Metadata
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code);
CREATE INDEX IF NOT EXISTS idx_coupons_user_id ON coupons(user_id);

-- Coupon usage tracking
CREATE TABLE IF NOT EXISTS coupon_usages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coupon_id UUID NOT NULL REFERENCES coupons(id),
  user_id UUID NOT NULL REFERENCES users(id),
  order_id UUID,
  used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  UNIQUE(coupon_id, user_id, order_id)
);

CREATE INDEX IF NOT EXISTS idx_coupon_usages_coupon_id ON coupon_usages(coupon_id);
CREATE INDEX IF NOT EXISTS idx_coupon_usages_user_id ON coupon_usages(user_id);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id),

  -- Amazon Pay transaction details
  amazon_order_reference_id VARCHAR(255),
  amazon_charge_id VARCHAR(255),

  -- Order details
  status VARCHAR(50) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'PAID', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'REFUNDED')),
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_fee DECIMAL(10,2) DEFAULT 0,
  tax DECIMAL(10,2) DEFAULT 0,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,

  -- Points
  points_earned INTEGER DEFAULT 0,
  points_used INTEGER DEFAULT 0,

  -- Coupon
  coupon_id UUID REFERENCES coupons(id),
  coupon_code VARCHAR(50),

  -- Shipping address (snapshot at order time)
  shipping_name VARCHAR(255),
  shipping_phone VARCHAR(50),
  shipping_postal_code VARCHAR(20),
  shipping_address_line1 TEXT,
  shipping_address_line2 TEXT,
  shipping_city VARCHAR(100),
  shipping_prefecture VARCHAR(100),
  shipping_country VARCHAR(100) DEFAULT 'Japan',

  -- Tracking
  tracking_number VARCHAR(100),
  shipped_at TIMESTAMP,
  delivered_at TIMESTAMP,

  -- Metadata
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,

  -- Product snapshot at order time
  product_id VARCHAR(50) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_image TEXT,
  product_category VARCHAR(50),
  product_subcategory VARCHAR(50),

  -- Purchase details
  size VARCHAR(20),
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,

  -- For pet association
  pet_id UUID REFERENCES pets(id),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
`;

// Export sql client for use in other API routes
export { sql };

// Helper function to initialize database
export async function initializeDatabase() {
  try {
    await sql.query(INIT_SQL);
    return { success: true };
  } catch (error) {
    console.error('Database initialization error:', error);
    return { success: false, error };
  }
}

// Helper to convert snake_case to camelCase
export function toCamelCase<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    result[camelKey] = obj[key];
  }
  return result;
}

// Helper to convert camelCase to snake_case
export function toSnakeCase<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    result[snakeKey] = obj[key];
  }
  return result;
}
