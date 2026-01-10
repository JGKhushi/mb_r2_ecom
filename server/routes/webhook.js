const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');

// NOTE: This route needs express.raw({type: 'application/json'}) middleware
// which is handled in server.js specifically for this route
router.post('/', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Update order status in database
      const order = await Order.findOneAndUpdate(
        { stripeSessionId: session.id },
        { 
          paymentStatus: 'paid',
          customerEmail: session.customer_details.email,
          shippingAddress: session.shipping_details.address
        },
        { new: true }
      );
      console.log(`Order ${order ? order._id : 'not found'} marked as PAID`);
    } catch (err) {
      console.error('Database Update Error:', err);
      return res.status(500).send('Database Error');
    }
  }

  res.json({ received: true });
});

module.exports = router;
