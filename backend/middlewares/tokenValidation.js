const jwt = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    const token = req.cookies?.authToken;

    if (!token) {
        return res.status(401).json({ message: 'Token required', loggedIn: false });
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired', loggedIn: false });
            }
            return res.status(401).json({ message: 'Invalid token', loggedIn: false });
        }

        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        const timeLeft = user.exp - now; // Calculate remaining time

        req.user = user; // Attach decoded user to request

        return res.status(200).json({
            message: 'Valid token',
            loggedIn: true,
            user,
            timeLeft // Send remaining expiration time in seconds
        });
    });
};

module.exports = tokenValidation;
