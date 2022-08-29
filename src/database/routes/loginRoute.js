const { Router } = require('express');
const { login } = require('../controllers/loginController');

const { validationLogin } = require('../middlewares/validationLogin');

const route = Router();

route.post('/', validationLogin, login);

module.exports = route;
