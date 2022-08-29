const { User } = require('../models');

const getUserAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

const createUser = async ({ displayName, email, password, image }) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

const getUserId = async (id) => {
    const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!result) {
        return null;
    }
    return result;
};

module.exports = {
    getUserAll,
    createUser,
    getUserId,
};
