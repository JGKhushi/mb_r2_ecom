import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <Store size={28} />
        <span>Khushi's MERN Shop</span>
      </Link>
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <span>View all Products</span>
      </Link>
      <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ShoppingCart size={24} className="text-gray-700" /> ShoppingCart
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
