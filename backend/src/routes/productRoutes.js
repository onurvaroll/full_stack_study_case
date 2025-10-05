import express from 'express';
import { getAllProducts, getFilteredProducts } from '../controllers/productController.js';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', getAllProducts);

// GET /api/products/filter - Get filtered products
router.get('/filter', getFilteredProducts);

export default router;
