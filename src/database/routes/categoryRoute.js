const { Router } = require('express');
const { createCategory } = require('../controllers/categoryController');

const { validationToken } = require('../middlewares/validationToken');
const { validationName } = require('../middlewares/validationName');

const route = Router();

route.post('/', validationName, validationToken, createCategory);

module.exports = route;
