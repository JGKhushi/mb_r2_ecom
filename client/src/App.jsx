import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
