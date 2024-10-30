import { useContext } from 'react';
import { FaShoppingCart, FaHeart, FaHome } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

export default function Navbar({ onNavigate, currentPage }) {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-black font-bold text-4xl">
            ShopMart
          </div>

          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-800'
              } hover:text-blue-600`}
            >
              <FaHome className="text-xl" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => onNavigate('cart')}
              className={`flex items-center space-x-2 ${
                currentPage === 'cart' ? 'text-blue-600' : 'text-gray-800'
              } hover:text-blue-600`}
            >
              <FaShoppingCart className="text-xl" />
              <span>Cart ({totalItems})</span>
            </button>
            <button 
              onClick={() => onNavigate('wishlist')}
              className={`flex items-center space-x-2 ${
                currentPage === 'wishlist' ? 'text-blue-600' : 'text-gray-800'
              } hover:text-blue-600`}
            >
              <FaHeart className="text-xl" />
              <span>Wishlist ({wishlist.length})</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}




















