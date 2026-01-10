const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  stripeSessionId: {
    type: String,
    required: true,
    unique: true,
  },
  customerEmail: String,
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
  },
  shippingAddress: {
    city: String,
    country: String,
    line1: String,
    line2: String,
    postal_code: String,
    state: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
