const Stripe = require('stripe');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handleStripeWebhook = (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    try {
        // ✅ Ensure Stripe receives the raw request body
        const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

        console.log("✅ Webhook received:", event.type);

        // Handle different event types
        if (event.type === 'payment_intent.succeeded') {
            console.log("🎉 Payment successful:", event.data.object);
            // Process order (e.g., update database)
        }

        res.status(200).json({ received: true });
    } catch (err) {
        console.error("🚨 Webhook Error:", err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
};

module.exports = handleStripeWebhook;
