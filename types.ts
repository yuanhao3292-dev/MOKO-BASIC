
export type Language = 'EN' | 'JP' | 'ZH_TW';

export type ProductBadge = 'NEW' | 'BESTSELLER' | 'LUXURY' | 'COLLAB' | 'LIMITED';

// Support for different grid sizes
export type ProductLayout = 'normal' | 'large' | 'wide' | 'tall';

export type ProductType = 'CLOTHING' | 'LEASH' | 'COLLAR' | 'ACCESSORY' | 'BOWL' | 'DISPENSER';

export interface ProductSpecs {
  warmth: number;      // 0-100
  breathability: number; // 0-100
  stretch: number;     // 0-100
  softness: number;    // 0-100
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: 'ESSENTIALS' | 'FUNCTION' | 'COUTURE'; 
  price: number;
  image: string;
  tags: string[];
  description: string;
  badge?: ProductBadge; 
  layout?: ProductLayout;
  specs: ProductSpecs;
  
  // External Marketplaces
  amazonUrl?: string;
  rakutenUrl?: string;

  // New Rich Detail Fields (4 images + 4 texts)
  galleryImages?: string[]; 
  galleryText?: { EN: string; JP: string; ZH_TW: string }[];

  // New fields for filtering
  gender: 'MALE' | 'FEMALE' | 'UNISEX';
  productType: ProductType;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedSize?: string;
}

// Order status types
export type OrderStatus =
  | 'PENDING'
  | 'PAID'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED';

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  tax: number;
  discountAmount: number;
  total: number;
  status: OrderStatus;
  pointsEarned: number;
  pointsUsed: number;
  couponCode?: string;
  shippingAddress?: ShippingAddress;
  trackingNumber?: string;
  shippedAt?: string;
  deliveredAt?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  size?: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

// Pet type
export type PetGender = 'MALE' | 'FEMALE';
export type PetSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Pet {
  id: string;
  userId: string;
  name: string;
  breed: string;
  weightKg?: number;
  birthDate?: string;
  gender?: PetGender;
  color?: string;
  neckCm?: number;
  chestCm?: number;
  lengthCm?: number;
  recommendedSize?: PetSize;
  photoUrl?: string;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}

// Shipping Address type
export interface ShippingAddress {
  id: string;
  userId: string;
  name: string;
  phone?: string;
  postalCode: string;
  prefecture: string;
  city: string;
  addressLine1: string;
  addressLine2?: string;
  isDefault: boolean;
  amazonAddressId?: string;
}

// Points types
export interface PointBalance {
  currentBalance: number;
  lifetimeEarned: number;
  lifetimeSpent: number;
  expiringSoon?: {
    amount: number;
    expiresAt: string;
  };
}

export type PointTransactionType = 'EARN' | 'SPEND' | 'EXPIRE' | 'ADJUST' | 'BONUS' | 'REFUND';

export interface PointTransaction {
  id: string;
  type: PointTransactionType;
  amount: number;
  balanceAfter: number;
  description: string;
  referenceType?: string;
  referenceId?: string;
  createdAt: string;
}

// Coupon types
export type CouponType = 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';

export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number;
  minimumOrderAmount: number;
  maximumDiscountAmount?: number;
  expiresAt: string;
  description?: string;
}

// Extended User type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferredLanguage: Language;
  amazonCustomerId?: string;

  // Legacy fields (for backwards compatibility)
  petName?: string;
  petWeight?: number;

  // Relations (loaded separately)
  pets?: Pet[];
  orders?: Order[];
  addresses?: ShippingAddress[];
  pointsBalance?: number;

  // Provider info
  provider?: 'AMAZON' | 'EMAIL';

  createdAt?: string;
  lastLoginAt?: string;
}

// Auth types
export interface AuthSession {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface JournalPost {
  id: string;
  title: { EN: string; JP: string; ZH_TW: string };
  date: string;
  category: string;
  image: string;
  content: { EN: string; JP: string; ZH_TW: string };
  relatedProductId: string;
}

export enum ViewState {
  HOME = 'HOME',
  MALE = 'MALE',         // Boy Dogs
  FEMALE = 'FEMALE',     // Girl Dogs
  SUPPLIES = 'SUPPLIES',
  PHILOSOPHY = 'PHILOSOPHY',
  INFO = 'INFO',
  MEMBER_CENTER = 'MEMBER_CENTER'
}
