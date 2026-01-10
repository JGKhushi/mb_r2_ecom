# MERN Stripe E-commerce Checkout System

A full-stack e-commerce checkout platform built with **MongoDB**, **Express**, **React (Vite)**, and **Node.js**, featuring complete **Stripe Checkout** integration with secure webhook handling.

## 🚀 Features

-   🛒 **Shopping Cart**: Add, remove, and update quantities using React Context API.
-   💳 **Stripe Checkout**: Seamless payment flow with Stripe Hosted Checkout page.
-   🔗 **Webhooks**: Secure backend verification of payments using Stripe Webhooks.
-   🗄️ **Database Integration**: Order data persistence in MongoDB.
-   🎨 **Tailwind CSS**: Modern, responsive UI with Lucide icons.
-   ⚡ **Concurrent Run**: Single command to start both frontend and backend.

## 📋 Prerequisites

-   **Node.js**: v16.x or later
-   **MongoDB**: Local installation or MongoDB Atlas URI
-   **Stripe Account**: Grab your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)

## 🛠️ Installation

1.  **Clone or create the folder structure** as provided in the files above.
2.  **Install Dependencies** from the root folder:
    npm run install-all

3.  **Environment Setup**:
    -   Go to the `server/` directory.
    -   Create a `.env` file from the example: `cp .env.example .env` (or manually copy).
    -   Update `STRIPE_SECRET_KEY` with your Stripe Secret Key.
    -   Update `MONGODB_URI` if using a remote cluster.

4.  **Local Webhooks (Development)**:
    Since Stripe cannot talk to `localhost` directly, you need the Stripe CLI:
    -   [Install Stripe CLI](https://stripe.com/docs/stripe-cli)
    -   Run: `stripe login`
    -   Run: `stripe listen --forward-to localhost:5000/api/webhook`
    -   Copy the **Webhook Secret** provided by the CLI (starts with `whsec_`) and paste it in `server/.env` as `STRIPE_WEBHOOK_SECRET`.

## 🚀 Running the Application

In the root directory, run:
    npm run dev

This will start:
-   **Backend**: `http://localhost:5000`
-   **Frontend**: `http://localhost:5173`

## 🧪 How to Test

1.  Open `http://localhost:5173`.
2.  Add items to your cart.
3.  Go to the cart page and click "Checkout with Stripe".
4.  Use Stripe's test card details (e.g., `4242 4242 4242 4242`).
5.  Upon successful payment:
    -   You will be redirected back to the `/success` page.
    -   The cart will be cleared.
    -   Check the server console to see the Order being updated to "paid" via the Webhook.
    -   Check your MongoDB database `stripe_ecommerce` to see the orders.

## 📁 Project Structure

-   `server/`: Express API handling checkout sessions, webhooks, and database models.
-   `client/`: React frontend with Tailwind CSS and Context API.
-   `package.json` (root): Orchestrates both environments using `concurrently`.

## ⚠️ Troubleshooting

-   **Webhook 400 Error**: Ensure your `STRIPE_WEBHOOK_SECRET` in `.env` matches the one provided by the `stripe listen` command.
-   **Cart not redirecting**: Verify that the backend is running on port 5000 and that CORS is allowed for port 5173.
-   **MongoDB Connection**: Ensure your MongoDB server is running locally (`mongosh`) or your Atlas URI is correctly formatted.
