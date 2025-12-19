// API Client for MOKO-BASIC
import type {
  User,
  Pet,
  ShippingAddress,
  PointBalance,
  PointTransaction,
  Coupon,
  Order,
  CartItem,
} from '../../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.error || 'Request failed',
        message: data.message,
      };
    }

    return { data };
  } catch (error) {
    console.error('API request failed:', error);
    return {
      error: 'Network error',
      message: 'Failed to connect to server',
    };
  }
}

// Auth API
export const authApi = {
  // Get Amazon authorization URL
  getAmazonAuthUrl: async () => {
    return fetchApi<{ authorization_url: string; state: string }>(
      '/api/auth/amazon/authorize',
      { method: 'POST' }
    );
  },

  // Get current session
  getSession: async () => {
    return fetchApi<{
      user: User | null;
      isAuthenticated: boolean;
    }>('/api/auth/session');
  },

  // Logout
  logout: async () => {
    return fetchApi<{ success: boolean }>('/api/auth/logout', {
      method: 'POST',
    });
  },
};

// User API
export const userApi = {
  // Get current user profile
  getProfile: async () => {
    return fetchApi<User>('/api/users/me');
  },

  // Update user profile
  updateProfile: async (data: Partial<User>) => {
    return fetchApi<User>('/api/users/me', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Get user's pets
  getPets: async () => {
    return fetchApi<{ pets: Pet[] }>('/api/users/pets');
  },

  // Create a new pet
  createPet: async (data: Partial<Pet>) => {
    return fetchApi<Pet>('/api/users/pets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Update a pet
  updatePet: async (petId: string, data: Partial<Pet>) => {
    return fetchApi<Pet>(`/api/users/pets/${petId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Delete a pet
  deletePet: async (petId: string) => {
    return fetchApi<{ success: boolean }>(`/api/users/pets/${petId}`, {
      method: 'DELETE',
    });
  },

  // Get user's addresses
  getAddresses: async () => {
    return fetchApi<{ addresses: ShippingAddress[] }>('/api/users/addresses');
  },

  // Create a new address
  createAddress: async (data: Partial<ShippingAddress>) => {
    return fetchApi<ShippingAddress>('/api/users/addresses', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Update an address
  updateAddress: async (addressId: string, data: Partial<ShippingAddress>) => {
    return fetchApi<ShippingAddress>(`/api/users/addresses/${addressId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Delete an address
  deleteAddress: async (addressId: string) => {
    return fetchApi<{ success: boolean }>(`/api/users/addresses/${addressId}`, {
      method: 'DELETE',
    });
  },
};

// Points API
export const pointsApi = {
  // Get points balance
  getBalance: async () => {
    return fetchApi<PointBalance>('/api/points/balance');
  },

  // Get points history
  getHistory: async (page = 1, limit = 20) => {
    return fetchApi<{
      transactions: PointTransaction[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }>(`/api/points/history?page=${page}&limit=${limit}`);
  },

  // Estimate points for cart
  estimate: async (total: number) => {
    return fetchApi<{ pointsToEarn: number }>('/api/points/estimate', {
      method: 'POST',
      body: JSON.stringify({ total }),
    });
  },
};

// Coupons API
export const couponsApi = {
  // Validate a coupon code
  validate: async (code: string, cartItems: CartItem[], subtotal: number) => {
    return fetchApi<{
      valid: boolean;
      coupon?: Coupon;
      discountAmount?: number;
      error?: string;
    }>('/api/coupons/validate', {
      method: 'POST',
      body: JSON.stringify({ code, cartItems, subtotal }),
    });
  },

  // Get user's available coupons
  getMyCoupons: async () => {
    return fetchApi<{ coupons: Coupon[] }>('/api/coupons/my-coupons');
  },
};

// Orders API
export const ordersApi = {
  // Get order list
  getOrders: async (page = 1, limit = 10, status?: string) => {
    let url = `/api/orders?page=${page}&limit=${limit}`;
    if (status) url += `&status=${status}`;
    return fetchApi<{
      orders: Order[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
      };
    }>(url);
  },

  // Get single order
  getOrder: async (orderId: string) => {
    return fetchApi<Order>(`/api/orders/${orderId}`);
  },

  // Create order
  createOrder: async (orderData: {
    items: CartItem[];
    shippingAddressId: string;
    couponCode?: string;
    pointsToUse?: number;
    amazonCheckoutSessionId: string;
  }) => {
    return fetchApi<Order>('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },
};

export default {
  auth: authApi,
  user: userApi,
  points: pointsApi,
  coupons: couponsApi,
  orders: ordersApi,
};
