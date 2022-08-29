const { Router } = require('express');
const { createUser, getAllUser, getUserId } = require('../controllers/userController');

const {
    validationDisplayName,
    ValidateEmail,
    ValidatePassword,
} = require('../middlewares/validationUser');

const { validationToken } = require('../middlewares/validationToken');

const route = Router();

route.post('/', validationDisplayName, ValidateEmail, ValidatePassword, createUser);
route.get('/', validationToken, getAllUser);
route.get('/:id', validationToken, getUserId);

module.exports = route;
