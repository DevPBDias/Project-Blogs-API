const { Category } = require('../models');

const getCategoryAll = async () => Category.findAll();

const createCategory = async ({ name }) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = {
    createCategory,
    getCategoryAll,
};
