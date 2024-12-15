const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const dotenv = require('dotenv');
dotenv.config();

const secret_key = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.authToken;
    
    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    try {
        const decoded = jwt.verify(token, secret_key);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; 
        res.json({ message: 'Token is valid', token });
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};

module.exports = verifyToken;
