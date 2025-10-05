import React, { useState } from 'react';
import ColorPicker from './ColorPicker.tsx';
import RatingStars from './RatingStars.tsx';
import { useCart } from '../context/CartContext.tsx';
import { Product, ColorType } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ColorType>('yellow');
  const { addToCart, openCart } = useCart();
  const colors = Object.keys(product.images) as ColorType[];

  const handleColorChange = (color: ColorType): void => {
    setSelectedColor(color);
  };

  const handleAddToCart = (): void => {
    addToCart(product, selectedColor);
    openCart();
  };

  const colorLabels: Record<ColorType, string> = {
    yellow: 'Yellow Gold',
    white: 'White Gold',
    rose: 'Rose Gold'
  };

  return (
    <div className="product-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      {/* Product Image */}
      <div className="bg-gray-100 dark:bg-gray-700 p-8 flex items-center justify-center h-64">
        <img
          src={product.images[selectedColor]}
          alt={`${product.name} - ${colorLabels[selectedColor]}`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg font-avenir font-normal text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 font-avenir">
          ${product.price.toFixed(2)} USD
        </p>

        {/* Color Picker */}
        <div className="mb-4">
          <ColorPicker
            colors={colors}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
            productName={product.name}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-avenir">
            {colorLabels[selectedColor]}
          </p>
        </div>

        {/* Rating */}
        <RatingStars rating={product.rating} />

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-avenir font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
