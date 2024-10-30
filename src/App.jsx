import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
          <main className="container mx-auto px-4 py-8 flex-grow">
            {currentPage === 'home' && <ProductCarousel />}
            {currentPage === 'cart' && <CartPage />}
            {currentPage === 'wishlist' && <WishlistPage />}
          </main>
          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;