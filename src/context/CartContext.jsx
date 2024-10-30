import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
    setIsLoading(false);
  }, [cart]);

  const addToCart = (product) => {
    setCart(currentCart => {
      try {
        const existingItem = currentCart.find(item => item.id === product.id);
        if (existingItem) {
          return currentCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...currentCart, { ...product, quantity: 1 }];
      } catch (error) {
        console.error('Error adding item to cart:', error);
        return currentCart;
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      updateQuantity, 
      removeFromCart,
      getTotal,
      clearCart,
      isLoading
    }}>
      {children}
    </CartContext.Provider>
  );
}