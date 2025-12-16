
export type Language = 'EN' | 'JP' | 'ZH_TW';

export type ProductBadge = 'NEW' | 'BESTSELLER' | 'LUXURY' | 'COLLAB' | 'LIMITED';

// Support for different grid sizes
export type ProductLayout = 'normal' | 'large' | 'wide' | 'tall';

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
  specs: ProductSpecs; // New Fabric Radar Data
  amazonUrl?: string; // New Hybrid Model Link
}

export interface CartItem extends Product {
  cartId: string; // Unique ID for cart entry (e.g. for size/color variants in future)
  quantity: number;
  selectedSize?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  petName?: string;
  petWeight?: number;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum ViewState {
  HOME = 'HOME',
  SHOP = 'SHOP',
  PHILOSOPHY = 'PHILOSOPHY', 
  CRAFT = 'CRAFT', 
  JOURNAL = 'JOURNAL', 
  ABOUT = 'ABOUT',
  PROFILE = 'PROFILE' // New Profile View
}