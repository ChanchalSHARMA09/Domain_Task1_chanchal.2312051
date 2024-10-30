import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
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
          <main className="flex-grow">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'cart' && (
              <div className="container mx-auto px-4 py-8">
                <CartPage />
              </div>
            )}
            {currentPage === 'wishlist' && (
              <div className="container mx-auto px-4 py-8">
                <WishlistPage />
              </div>
            )}
          </main>
          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;