const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { User } = require('../models');

const validationToken = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
        const { email } = jwt.verify(authorization, JWT_SECRET);
        const user = await User.findOne({ where: { email } });
        if (!user || !email) throw Error;
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
};

module.exports = { validationToken };
