import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, ColorType } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, color: ColorType) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, color: ColorType): void => {
    const itemId = `${product.name}-${color}`;
    
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item: CartItem) => item.id === itemId);
      
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item: CartItem) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: itemId,
            name: product.name,
            price: product.price,
            color: color,
            image: product.images[color],
            quantity: 1,
            rating: product.rating
          }
        ];
      }
    });
  };

  const removeFromCart = (itemId: string): void => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number): void => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = (): void => {
    setCartItems([]);
  };

  const getTotalItems = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  };

  const getTotalPrice = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
