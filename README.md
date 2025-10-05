# Renart Full Stack Study Case

Bu proje, Node.js (Express) backend ve React + TypeScript frontend içeren tam kapsamlı bir e-ticaret uygulamasıdır.


## Klasör Yapısı (Detaylı)

```
renart_fullstack/
├── backend/                  # Node.js + Express API
│   ├── data/
│   │   └── products.json
│   ├── src/
│   │   ├── controllers/
│   │   │   └── productController.js
│   │   ├── routes/
│   │   │   └── productRoutes.js
│   │   ├── services/
│   │   │   └── goldPriceService.js
│   │   ├── utils/
│   │   │   └── priceCalculator.js
│   │   └── server.js
│   ├── package.json
│   └── .env (örnek)
│
├── frontend/                 # React + TypeScript + Vite
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppBar.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── ColorPicker.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductCarousel.tsx
│   │   │   └── RatingStars.tsx
│   │   ├── context/
│   │   │   ├── CartContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   └── useProducts.ts
│   │   ├── pages/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── HomePage.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── package.json
│   └── .env (örnek)

```

## Kurulum ve Çalıştırma

### 1. Backend
```bash
cd backend
npm install
npm start
```
- Sunucu: http://localhost:5000

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
- Uygulama: http://localhost:3000

## Notlar
- Ortam değişkenleri için backend ve frontend dizinlerinde `.env` dosyası oluşturabilirsiniz.

## Kısa Açıklama
- Backend: Ürün verisi, altın fiyatı, filtreleme API'ları
- Frontend: Ürün listeleme, sepet, tema, renk seçimi, About ve Contact sayfaları
