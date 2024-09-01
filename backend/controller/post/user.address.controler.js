const UserAddress = require('../../models/userAddress.model');
const redisClient = require('../../middlewares/redis');

const handleUserAddress = async (req, res) => {
    const { street, city, pincode, state, country, holderName, bankName, accountNumber, ifscCode } = req.body;

    if (!street || !city || !pincode || !state || !country) {
        return res.status(400).json({ message: 'Fields required' });
    }

    try {
        const userId = req.user._id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Token required' });
        }

        const userAddress = new UserAddress({
            userId: userId._id,
            address : {
                street,
                city,
                pincode,
                state,
                country,
            },
            bankDetails : {
                holderName,
                bankName,
                accountNumber,
                ifscCode
            }
        });

        const savedUserAddress = await userAddress.save();

        await redisClient.set(`userAddress:${userId._id}`, JSON.stringify(savedUserAddress), 'EX', 3600);

        return res.status(200).json({ message: 'User address saved successfully', data: savedUserAddress });
    } catch (error) {
        console.error('Error saving user address:', error);
        return res.status(500).json({ message: 'Internal Error' });
    }
};

module.exports = handleUserAddress;
