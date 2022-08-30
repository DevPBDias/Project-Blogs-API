const { Router } = require('express');
const { getPostCategoryAll, getPostCategoryById } = require('../controllers/postController');

const { validationToken } = require('../middlewares/validationToken');

const route = Router();

route.get('/', validationToken, getPostCategoryAll);
route.get('/:id', validationToken, getPostCategoryById);

module.exports = route;
