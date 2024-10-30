import { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
    setIsLoading(false);
  }, [wishlist]);

  const toggleWishlist = (product) => {
    try {
      setWishlist(currentWishlist => {
        const exists = currentWishlist.some(item => item.id === product.id);
        if (exists) {
          return currentWishlist.filter(item => item.id !== product.id);
        }
        return [...currentWishlist, product];
      });
    } catch (error) {
      console.error('Error toggling wishlist item:', error);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      toggleWishlist,
      clearWishlist,
      isInWishlist,
      isLoading
    }}>
      {children}
    </WishlistContext.Provider>
  );
}