import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleCheckout = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:5000/api/checkout/create-checkout-session',
        {
          items: cart,
          email: email,
        }
      );

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Failed to initiate checkout.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <ul className="divide-y">
        {cart.map((item) => (
          <li key={item.id} className="p-6 flex items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />

            <div className="ml-6 flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <Minus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <Plus />
              </button>
            </div>

            <div className="ml-6 text-right">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>
                <Trash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 bg-gray-50 p-6 rounded">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
        />

        <div className="flex justify-between font-bold text-xl mb-4">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded flex justify-center items-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : 'Checkout'}
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cart;
