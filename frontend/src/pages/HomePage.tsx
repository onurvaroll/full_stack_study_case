import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCarousel from '../components/ProductCarousel.tsx';

const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center text-red-600 dark:text-red-400">
          <p className="text-xl font-semibold">Error loading products</p>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-16">
      {/* Header */}
      <header className="py-12 text-center">
        <h1 className="text-4xl font-avenir font-normal text-gray-900 dark:text-white">
          Product List
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-avenir">
          Avenir - Book - 45
        </p>
      </header>

      {/* Product Carousel */}
      <main className="container mx-auto px-4 pb-16" id="products">
        <ProductCarousel products={products} />
      </main>
    </div>
  );
};

export default HomePage;
