const jwt = require('jsonwebtoken');
const Services = require('../services/recipes');

const secret = 'senha';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const alreadyExists = async (req, res, next) => {
  const { id } = req.params;
  const recipes = await Services.findById(id);
  if (recipes.err) {
    const { message, code } = recipes.err;
    return res.status(code).json({ message });
  }
  next();
};

const whoIsLogin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  const { id } = req.params;
  try {
    const verifiedToken = jwt.verify(token, secret, jwtConfig);
    const { role, _id } = verifiedToken.userWithoutPassword;
    const recipes = await Services.findById(id);
    if (_id === recipes.userId || role === 'admin') {
      return next();
    }
    return res.status(401).json({ message: 'missing auth token' });
  } catch (e) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  alreadyExists,
  whoIsLogin,
};