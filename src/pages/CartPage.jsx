import { useContext } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotal, isLoading } = useContext(CartContext);

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center p-4 border rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-grow ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                  disabled={item.quantity <= 1}
                >
                  <FaMinus className={`${item.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'}`} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <FaPlus className="text-gray-600" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <div className="text-right">
          <p className="text-lg font-semibold">
            Total: ${getTotal().toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}