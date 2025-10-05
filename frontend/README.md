# Renart Frontend

## 🚀 Kurulum

```bash
cd frontend
npm install
```

## 🏃 Çalıştırma

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Kullanılan Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool ve dev server
- **Tailwind CSS** - Styling
- **Swiper.js** - Carousel component
- **Axios** - HTTP client

## 🎨 Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ Swiper carousel (ok tuşları + swipe desteği)
- ✅ Renk seçici (3 renk: Yellow, White, Rose Gold)
- ✅ Yıldız rating sistemi
- ✅ Gerçek zamanlı fiyat hesaplama
- ✅ Loading states
- ✅ Error handling

## 📁 Proje Yapısı

```
frontend/
├── src/
│   ├── components/        # React components
│   │   ├── ProductCard.jsx
│   │   ├── ProductCarousel.jsx
│   │   ├── ColorPicker.jsx
│   │   └── RatingStars.jsx
│   ├── hooks/            # Custom hooks
│   │   └── useProducts.js
│   ├── services/         # API services
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── public/
    └── fonts/            # Custom fonts (Avenir, Montserrat)
```

## 🌐 Environment Variables

`.env` dosyası:
```
VITE_API_URL=http://localhost:5000/api
```

## 📱 Responsive Breakpoints

- Mobile: 1 ürün
- Tablet (640px+): 2 ürün
- Desktop (768px+): 3 ürün
- Large Desktop (1024px+): 4 ürün
