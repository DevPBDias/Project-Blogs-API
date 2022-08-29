const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const getAllUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const token = jwt.sign({ displayName, email, password, image }, JWT_SECRET);
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'Deu erro no getAllUser' });
    }
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const token = jwt.sign({ displayName, email, password, image }, JWT_SECRET);
        const userEmail = await User.findOne({ where: { email } });
        if (userEmail) {
            return res.status(409).json({ message: 'User already registered' });
        }
        const result = await userService.createUser({ displayName, email, password, image });
        if (result) {
            return res.status(201).json({ token });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Deu erro no createUser' });
    }
};

module.exports = {
    getAllUser,
    createUser,
};
