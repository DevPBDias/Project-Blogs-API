const Sequelize = require('sequelize');
const { Category, BlogPost } = require('../models');
const config = require('../config/config');
const postService = require('../services/postService');

const sequelize = new Sequelize(config.development);

const getPostCategoryAll = async (_req, res, _next) => {
    try {
        const result = await postService.getPostCategoryAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Deu erro no getPostCategoryAll' });
    }
};

const getPostCategoryById = async (req, res, _next) => {
    const { id } = req.params;
    try {
        const result = await postService.getPostCategoryById(id);
        if (result === null) {
            return res.status(404).json({ message: 'Post does not exist' });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Deu erro no getPostCategoryById' });
    }
};

const createPostCategory = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { title, content, categoryIds } = req.body;
        const post = await BlogPost.create(
            { title, content },
            { transaction },
        );
        await Category.create(
            { post, categoryIds: categoryIds.id },
            { transaction },
        );
        await transaction.commit();
        return res.status(201).json({ message: 'Cadastrado com sucesso' });
    } catch (e) {
        await transaction.rollback();
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
    createPostCategory,
    getPostCategoryAll,
    getPostCategoryById,
};
