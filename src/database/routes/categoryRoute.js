const { Router } = require('express');
const { createCategory, getCategoryAll } = require('../controllers/categoryController');

const { validationToken } = require('../middlewares/validationToken');
const { validationName } = require('../middlewares/validationName');

const route = Router();

route.post('/', validationName, validationToken, createCategory);
route.get('/', validationToken, getCategoryAll);

module.exports = route;
