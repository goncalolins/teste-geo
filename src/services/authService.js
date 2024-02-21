const jwt = require('jsonwebtoken');

exports.generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded.userId;
    } catch (error) {
        return null;
    }
};