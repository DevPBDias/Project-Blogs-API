const { Router } = require('express');
const { createUser } = require('../controllers/userController');

const {
    validationDisplayName,
    ValidateEmail,
    ValidatePassword,
} = require('../middlewares/validationUser');

const route = Router();

route.post('/', validationDisplayName, ValidateEmail, ValidatePassword, createUser);

module.exports = route;