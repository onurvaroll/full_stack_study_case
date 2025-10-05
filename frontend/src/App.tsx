import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import './App.css';

function App() {
  return (
    <div className="app min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* AppBar */}
      <AppBar />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
        <p>&copy; 2025 Renart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
