/**
 * Calculate product price based on formula:
 * Price = (popularityScore + 1) × weight × goldPrice
 * 
 * @param {number} popularityScore - Product popularity (0-1)
 * @param {number} weight - Product weight in grams
 * @param {number} goldPrice - Current gold price per gram in USD
 * @returns {number} Calculated price in USD
 */
export const calculatePrice = (popularityScore, weight, goldPrice) => {
  const price = (popularityScore + 1) * weight * goldPrice;
  return Math.round(price * 100) / 100; // Round to 2 decimal places
};

/**
 * Convert popularity score (0-1) to rating out of 5
 * 
 * @param {number} popularityScore - Product popularity (0-1)
 * @returns {number} Rating out of 5 (1 decimal place)
 */
export const convertToRating = (popularityScore) => {
  const rating = popularityScore * 5;
  return Math.round(rating * 10) / 10; // Round to 1 decimal place
};

/**
 * Format price to USD currency string
 * 
 * @param {number} price - Price in USD
 * @returns {string} Formatted price (e.g., "$101.00 USD")
 */
export const formatPrice = (price) => {
  return `$${price.toFixed(2)} USD`;
};
