const { User } = require('../models');

const login = async (email) => {
    const result = await User.findOne({ where: { email } });
    return result;
};

module.exports = {
    login,
};
