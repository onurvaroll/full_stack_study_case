export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: {
    yellow: string;
    white: string;
    rose: string;
  };
  price: number;
  rating: number;
  goldPricePerGram?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    total: number;
    goldPricePerGram: number;
    timestamp: string;
    filters?: FilterParams;
  };
}

export interface FilterParams {
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  maxRating?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  color: 'yellow' | 'white' | 'rose';
  image: string;
  quantity: number;
  rating: number;
}

export type ColorType = 'yellow' | 'white' | 'rose';
