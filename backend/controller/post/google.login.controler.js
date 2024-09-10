const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cookies = require('../../utils/cookies');

dotenv.config();
const secret_key = process.env.SECRET_KEY;

const handleGoogleLogin = async (req, res) => {
    const { email, googleUid } = req.body;

    if (!email || !googleUid) {
        return res.status(400).json({ message: 'Fields required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'You don\'t have an account ' });
        }

        const checkId = await bcrypt.compare(googleUid, user.googleUid);
        if (!checkId) {
            return res.status(401).json({ message: 'Unauthorized user' });
        }

        const token = await jwt.sign({ userId: user._id }, secret_key, { expiresIn: '24h' });
        cookies(res, token, process.env.NODE_ENV);

        return res.status(200).json({ message: 'success', authToken: token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = handleGoogleLogin;
