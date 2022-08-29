const { User } = require('../models');

const getUserAll = async () => User.findAll();

const createUser = async ({ displayName, email, password, image }) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

module.exports = {
    getUserAll,
    createUser,
};
