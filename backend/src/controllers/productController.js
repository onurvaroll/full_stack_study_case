import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import goldPriceService from '../services/goldPriceService.js';
import { calculatePrice, convertToRating } from '../utils/priceCalculator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get all products with calculated prices
 */
export const getAllProducts = async (req, res) => {
  try {
    // Read products from JSON file
    const productsPath = join(__dirname, '../../data/products.json');
    const productsData = await readFile(productsPath, 'utf-8');
    const products = JSON.parse(productsData);

    // Get current gold price
    const goldPrice = await goldPriceService.getCurrentGoldPrice();

    // Calculate prices and ratings for each product
    const productsWithPrices = products.map(product => ({
      ...product,
      price: calculatePrice(product.popularityScore, product.weight, goldPrice),
      rating: convertToRating(product.popularityScore),
      goldPricePerGram: goldPrice
    }));

    res.json({
      success: true,
      data: productsWithPrices,
      meta: {
        total: productsWithPrices.length,
        goldPricePerGram: goldPrice,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in getAllProducts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch products'
    });
  }
};

/**
 * Get filtered products
 * Query params: minPrice, maxPrice, minRating, maxRating
 */
export const getFilteredProducts = async (req, res) => {
  try {
    const { minPrice, maxPrice, minRating, maxRating } = req.query;

    // Read products from JSON file
    const productsPath = join(__dirname, '../../data/products.json');
    const productsData = await readFile(productsPath, 'utf-8');
    const products = JSON.parse(productsData);

    // Get current gold price
    const goldPrice = await goldPriceService.getCurrentGoldPrice();

    // Calculate prices and ratings
    let productsWithPrices = products.map(product => ({
      ...product,
      price: calculatePrice(product.popularityScore, product.weight, goldPrice),
      rating: convertToRating(product.popularityScore),
      goldPricePerGram: goldPrice
    }));

    // Apply filters
    if (minPrice) {
      productsWithPrices = productsWithPrices.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      productsWithPrices = productsWithPrices.filter(p => p.price <= parseFloat(maxPrice));
    }
    if (minRating) {
      productsWithPrices = productsWithPrices.filter(p => p.rating >= parseFloat(minRating));
    }
    if (maxRating) {
      productsWithPrices = productsWithPrices.filter(p => p.rating <= parseFloat(maxRating));
    }

    res.json({
      success: true,
      data: productsWithPrices,
      meta: {
        total: productsWithPrices.length,
        filters: { minPrice, maxPrice, minRating, maxRating },
        goldPricePerGram: goldPrice,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in getFilteredProducts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to filter products'
    });
  }
};
