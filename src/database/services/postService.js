const { PostCategory, BlogPost, Category, User } = require('../models');

const getPostCategoryAll = async () => {
    const result = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return result;
};

const getPostCategoryById = async (id) => {
    const result = await BlogPost.findByPk(id,
        {
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ],
        });
    if (!result) {
        return null;
    }
    return result;
};

const createPostCategory = async ({ title, content, categoryIds }) => {
    const result = await PostCategory.create({ title, content, categoryIds });
    return result;
};

module.exports = {
    createPostCategory,
    getPostCategoryAll,
    getPostCategoryById,
};
