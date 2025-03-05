const Order = require('../../models/order.model');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const redisClient = require('../../middlewares/redis');

// Stripe Webhook Secret Key for signature verification
const endpointSecret = 'whsec_W2ZwMyJBoWuRyK4etJOT2tNTDjfdqt7c';

// Handle Order and Webhook
const handleOrder = async (req, res) => {
    const { sellerId, products, totalAmount, shippingAddress } = req.body;

    // Handle order creation
    if (!sellerId || !products || !totalAmount || !shippingAddress) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const userId = req.user._id;
    if (!userId) {
        return res.status(400).json({ message: 'Token required' });
    }

    try {
        // Save the order to your database
        const order = new Order({
            userId,
            sellerId,
            products: products.map(product => ({
                productId: product.productId,
                quantity: product.quantity
            })),
            totalAmount,
            shippingAddress
        });

        await order.save();

        // Save the order to Redis (optional)
        await redisClient.setEx(`order:${userId}`, 60 * 60, JSON.stringify(order));

        // Create a PaymentIntent if you're integrating payment here
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount * 100,  // Total amount in cents
            currency: 'usd',  // Change currency as needed
            metadata: { orderId: order._id.toString() }
        });

        // Return the paymentIntent client secret to be used on the frontend
        return res.status(200).json({
            message: 'Order created successfully',
            order,
            clientSecret: paymentIntent.client_secret
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

// Stripe Webhook to handle successful payment
const handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    // Verify webhook signature
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log('Error verifying webhook signature:', err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;

        // Get the order from the metadata attached to the payment
        const orderId = paymentIntent.metadata.orderId;

        // Find the order and update its status to "paid"
        console.log('Your payment success', orderId)

        // Optionally, send a confirmation email or trigger other actions here

        // Return a success response to Stripe
        return res.json({ received: true });
    }

    if (event.type === 'payment_intent.failed') {
        const paymentIntent = event.data.object;
        // Handle failed payment, update order status, etc.
    }

    // Handle other event types as necessary (e.g., payment failed, etc.)
    return res.status(400).send('Event type not handled');
};

module.exports = { handleOrder, handleStripeWebhook };
