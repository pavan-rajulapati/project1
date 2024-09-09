const Seller = require('../../models/seller.model');
const User = require('../../models/user.model');
const redisClient = require('../../middlewares/redis')

const handleSeller = async (req, res) => {
    const { name, email, mobileNumber, street, city, pincode, state, country, holderName, bankName, accountNumber, ifscCode } = req.body;

    if (!name || !email || !mobileNumber || !street || !city || !pincode || !state || !country || !holderName || !bankName || !accountNumber || !ifscCode) {
        return res.status(400).json({ message: 'Fields required' });
    }

    try {
        const userId = req.user._id
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Token required' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.isSeller) {
            return res.status(409).json({ message: 'User is already registered as a seller' });
        }

        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) {
            return res.status(409).json({ message: 'Seller already exists with this email' });
        }

        const newSeller = new Seller({
            userId: user._id,
            name,
            email,
            mobileNumber,
            address: {
                street,
                city,
                pincode,
                state,
                country
            },
            bankDetails: {
                holderName,
                bankName,
                accountNumber,
                ifscCode
            }
        });

        await newSeller.save();

        user.isSeller = true;
        await user.save();

        await redisClient.set(`seller:${newSeller._id}`, 60 * 60, JSON.stringify(newSeller));

        return res.status(201).json({ message: 'Seller registered successfully', data: newSeller });

    } catch (error) {
        return res.status(500).json({ message: 'Internal Error', error: error.message });
    }
};

module.exports = handleSeller;
