const User = require('../models/user.model');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const secret_key = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    jwt.verify(token, secret_key, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token', error: err.message });
        }

        try {
            const user = await User.findById(decoded.userId); 
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            req.user = user; 
            next(); 
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    });
};

module.exports = verifyToken;
