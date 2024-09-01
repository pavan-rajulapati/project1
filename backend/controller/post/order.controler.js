const Order = require('../../models/order.model');
const redisClient = require('../../middlewares/redis');

const handleOrder = async (req, res) => {
    const { sellerId, products, totalAmount, shippingAddress } = req.body;

    if (!sellerId || !products || !totalAmount || !shippingAddress) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const userId = req.user._id;
    if (!userId) {
        return res.status(400).json({ message: 'Token required' });
    }

    try {
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

        await redisClient.setEx(`order:${userId}`, 36000, JSON.stringify(order));

        return res.status(200).json({ message: 'success', order });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = handleOrder;
