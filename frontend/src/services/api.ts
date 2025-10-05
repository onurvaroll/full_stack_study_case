import axios, { AxiosInstance } from 'axios';
import { Product, ApiResponse, FilterParams } from '../types';

const API_BASE_URL: string = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch all products from the API
 */
export const getAllProducts = async (): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch filtered products
 * @param {Object} filters - { minPrice, maxPrice, minRating, maxRating }
 */
export const getFilteredProducts = async (filters: FilterParams = {}): Promise<ApiResponse<Product[]>> => {
  try {
    const params = new URLSearchParams();
    
    if (filters.minPrice) params.append('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
    if (filters.minRating) params.append('minRating', filters.minRating.toString());
    if (filters.maxRating) params.append('maxRating', filters.maxRating.toString());

    const response = await apiClient.get(`/products/filter?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    throw error;
  }
};

export default apiClient;
