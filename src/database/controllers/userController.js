const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const getAllUser = async (_req, res, _next) => {
    try {
        const result = await userService.getUserAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Deu erro no getAllUser' });
    }
};

const getUserId = async (req, res, _next) => {
    const { id } = req.params;
    try {
        const result = await userService.getUserId(id);
        if (result === null) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Deu erro no getUserId' });
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
    getUserId,
};
