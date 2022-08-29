const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = jwt.sign({ email, password }, JWT_SECRET, JWT_OPTIONS);
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'Deu erro no loginController' });
    }
};

module.exports = {
    login,
};
