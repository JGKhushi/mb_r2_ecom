import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'prod_1',
    name: 'Premium Leather Camera Strap',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60',
    description: 'Handcrafted genuine leather strap for DSLR cameras.'
  },
 {
    id: 'prod_2',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  },
  {
    id: 'prod_3',
    name: 'Noise Cancelling Headphones',
    price: 199.50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    description: 'Focus on what matters with active noise cancellation.'
  },
  {
    id: 'prod_4',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  },
   {
    id: 'prod_1',
    name: 'Premium Leather Camera Strap',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60',
    description: 'Handcrafted genuine leather strap for DSLR cameras.'
  },
 {
    id: 'prod_2',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  },
  {
    id: 'prod_3',
    name: 'Noise Cancelling Headphones',
    price: 199.50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    description: 'Focus on what matters with active noise cancellation.'
  },
  {
    id: 'prod_4',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  },
   {
    id: 'prod_1',
    name: 'Premium Leather Camera Strap',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60',
    description: 'Handcrafted genuine leather strap for DSLR cameras.'
  },
 {
    id: 'prod_2',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  },
  {
    id: 'prod_3',
    name: 'Noise Cancelling Headphones',
    price: 199.50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    description: 'Focus on what matters with active noise cancellation.'
  },
  {
    id: 'prod_4',
    name: 'Ceramic Coffee Mug',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60',
    description: 'Perfectly sized for your morning brew.'
  }
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-blue-600">${product.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Plus size={20} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
