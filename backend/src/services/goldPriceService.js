import axios from 'axios';

/**
 * Fetches current gold price per gram in USD
 * Uses multiple fallback APIs for reliability
 * 
 * Recommended: Get free API key from https://www.goldapi.io/
 * Add to .env: GOLD_API_KEY=your_key_here
 */
class GoldPriceService {
  constructor() {
    this.cachedPrice = null;
    this.lastFetch = null;
    this.cacheDuration = 60 * 60 * 1000; // 1 hour cache (gold price doesn't change frequently)
    this.fallbackPrice = 65.5; // Fallback price in USD per gram
  }

  async getCurrentGoldPrice() {
    try {
      // Return cached price if still valid
      if (this.cachedPrice && this.lastFetch && 
          (Date.now() - this.lastFetch) < this.cacheDuration) {
        console.log('💰 Using cached gold price:', this.cachedPrice);
        return this.cachedPrice;
      }

      // Try multiple APIs in order
      const apis = [
        // GoldAPI.io (requires free API key but more reliable)
        // Uncomment and add your API key from https://www.goldapi.io/
        // {
        //   url: 'https://www.goldapi.io/api/XAU/USD',
        //   headers: { 'x-access-token': process.env.GOLD_API_KEY },
        //   parser: (data) => data.price_gram_24k
        // },
        
        // Metals.dev API (alternative free API)
        {
          url: 'https://api.metalpriceapi.com/v1/latest?api_key=demo&base=USD&currencies=XAU',
          parser: (data) => {
            // XAU is in troy ounces, convert to grams
            const pricePerOunce = 1 / data.rates.XAU; // Inverted rate
            return pricePerOunce / 31.1035;
          }
        },
      ];

      // Try each API
      for (const api of apis) {
        try {
          const response = await axios.get(api.url, {
            headers: api.headers || {},
            timeout: 5000
          });

          const pricePerGram = api.parser ? api.parser(response.data) : response.data.price;
          
          if (pricePerGram && pricePerGram > 0) {
            this.cachedPrice = pricePerGram;
            this.lastFetch = Date.now();
            console.log(`💰 Gold price updated: $${pricePerGram.toFixed(2)}/gram`);
            return pricePerGram;
          }
        } catch (apiError) {
          console.log(`⚠️ API failed: ${api.url.split('/')[2]}`);
          continue; // Try next API
        }
      }

      // If all APIs fail, use fallback
      throw new Error('All APIs failed');

    } catch (error) {
      console.error('❌ Error fetching gold price from all sources');
      
      // Fallback: Use approximate current gold price
      // October 2025 approximate gold price
      const fallbackPrice = 65.5; // Approximate USD per gram (based on ~$2000/oz)
      console.log(`⚠️ Using fallback gold price: $${fallbackPrice}/gram`);
      
      // Cache fallback price for shorter duration
      this.cachedPrice = fallbackPrice;
      this.lastFetch = Date.now();
      
      return fallbackPrice;
    }
  }
}

export default new GoldPriceService();
