
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

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'PENDING' | 'SHIPPED' | 'DELIVERED';
}

export interface User {
  id: string;
  name: string;
  email: string;
  petName?: string;
  petWeight?: number;
  orders: Order[];
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
  FITTING_ROOM = 'FITTING_ROOM',
  INFO = 'INFO'
}
