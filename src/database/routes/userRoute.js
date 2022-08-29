const { Router } = require('express');
const { createUser, getAllUser } = require('../controllers/userController');

const {
    validationDisplayName,
    ValidateEmail,
    ValidatePassword,
} = require('../middlewares/validationUser');

const { validationToken } = require('../middlewares/validationToken');

const route = Router();

route.post('/', validationDisplayName, ValidateEmail, ValidatePassword, createUser);
route.get('/', validationToken, getAllUser);

module.exports = route;
