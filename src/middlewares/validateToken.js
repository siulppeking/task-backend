const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../config');

const validateToken = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) return res.status(401).json({ message: 'No token provided.' });

    jwt.verify(token, TOKEN_SECRET, (err, token) => {
        if (err) return res.status(401).json({ message: 'Invalid token.' });
        req.token = token;
    })
    next()
}

module.exports = validateToken;