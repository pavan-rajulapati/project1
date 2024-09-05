const Cart = require('../../models/cart.model');
const redisClient = require('../../middlewares/redis');

const handleCart = async (req, res) => {
    const userId = req.user._id;
    if (!userId) {
        return res.status(400).json({ message: 'Token Required' });
    }

    try {
        const cacheKey = `cart:${userId}`;
        
        const redisCache = await redisClient.get(cacheKey);

        if (redisCache) {
            const cachedCartData = JSON.parse(redisCache);

            const dbCartItemCount = await Cart.countDocuments({ userId });

            if (cachedCartData.length === dbCartItemCount) {
                return res.status(200).json({ message: 'success', userData: cachedCartData });
            }
        }

        const userData = await Cart.find({ userId });
        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: 'Cart is empty' });
        }

        await redisClient.setEx(cacheKey, 60 * 60, JSON.stringify(userData));

        return res.status(200).json({ message: 'success', userData });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = handleCart;
