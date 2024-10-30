import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-64">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full ${
              isInWishlist ? 'text-red-500' : 'text-gray-400'
            } hover:text-red-500`}
          >
            <FaHeart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}