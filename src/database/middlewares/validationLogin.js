const loginService = require('../services/loginService');

const validationLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const result = await loginService.login(email, password);
    if (!result || result.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

module.exports = {
    validationLogin,
};
