require('dotenv').config();
console.log("ENV CHECK → STRIPE_SECRET_KEY =", process.env.STRIPE_SECRET_KEY);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const checkoutRoutes = require('./routes/checkout');
const webhookRoutes = require('./routes/webhook');

const app = express();

// Stripe Webhook needs raw body, must be defined BEFORE any other bodyParser/express.json()
app.use('/api/webhook', express.raw({ type: 'application/json' }), webhookRoutes);

// Regular middleware for other routes
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/checkout', checkoutRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/khushi_stripe_ecommerce')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Basic health check
app.get('/health', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
