import { useContext } from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, isLoading } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddAllToCart = () => {
    wishlist.forEach(item => addToCart(item));
  };

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-600">Your wishlist is empty</h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        <button
          onClick={handleAddAllToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
        >
          <FaShoppingCart />
          <span>Add All to Cart</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 flex flex-col">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <button
                onClick={() => toggleWishlist(item)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
            <div className="mt-4 flex-grow">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}