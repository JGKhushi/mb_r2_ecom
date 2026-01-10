import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const Success = () => {
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Clear cart upon successful payment
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="flex justify-center mb-6 text-green-500">
        <CheckCircle size={80} />
      </div>
      <h1 className="text-3xl font-extrabold mb-4">Payment Successful!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for your purchase. Your order has been placed and is being processed.
      </p>
      {sessionId && (
        <p className="text-sm text-gray-400 mb-8 font-mono">
          Order Reference: {sessionId.substring(0, 20)}...
        </p>
      )}
      <div className="flex gap-4 justify-center">
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
        <Link 
          to="/" 
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2"
        >
          <ShoppingBag size={18} />
          View all prducts
        </Link>
      </div>
    </div>
  );
};

export default Success;
