const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.originalUrl.startsWith('/docs')) {
        return next();
    }

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
};