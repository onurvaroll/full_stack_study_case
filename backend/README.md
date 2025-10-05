# Renart Backend API

## 🚀 Kurulum

```bash
cd backend
npm install
```

## 🏃 Çalıştırma

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📡 API Endpoints

### Get All Products
```
GET /api/products
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "Engagement Ring 1",
      "popularityScore": 0.85,
      "weight": 2.1,
      "images": { ... },
      "price": 253.47,
      "rating": 4.3,
      "goldPricePerGram": 65.0
    }
  ],
  "meta": {
    "total": 8,
    "goldPricePerGram": 65.0,
    "timestamp": "2025-10-05T..."
  }
}
```

### Get Filtered Products
```
GET /api/products/filter?minPrice=200&maxPrice=400&minRating=4.0
```

**Query Parameters:**
- `minPrice` (optional) - Minimum price in USD
- `maxPrice` (optional) - Maximum price in USD
- `minRating` (optional) - Minimum rating (0-5)
- `maxRating` (optional) - Maximum rating (0-5)

## 🔧 Environment Variables

Create a `.env` file:
```
PORT=5000
GOLD_API_KEY=your_api_key_here
```

## 💰 Gold Price API

### Current Implementation
- Uses fallback system with multiple API attempts
- Cache duration: 1 hour
- Fallback price: $65.50/gram

### Recommended Setup (Optional)
For real-time gold prices, get a free API key:

1. Sign up at [GoldAPI.io](https://www.goldapi.io/)
2. Get your free API key
3. Add to `.env` file:
   ```
   GOLD_API_KEY=your_api_key_here
   ```
4. Uncomment GoldAPI section in `src/services/goldPriceService.js`

### Alternative APIs
- **GoldAPI.io** - Most reliable, requires free API key
- **MetalPriceAPI.com** - Alternative, currently used
- **Fallback** - Static price if APIs fail

The application works perfectly with the fallback price system.
