const CategoryService = require('../services/categoryService');

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
};
