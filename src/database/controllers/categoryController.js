const CategoryService = require('../services/categoryService');

const getCategoryAll = async (_req, res, _next) => {
    try {
        const result = await CategoryService.getCategoryAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Deu erro no getCategoryAll' });
    }
};

const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await CategoryService.createCategory({ name });
        return res.status(201).json(result);
    } catch (err) {
        return res.status(500).json({ message: 'Deu erro no createCategory' });
    }
};

module.exports = {
    createCategory,
    getCategoryAll,
};
