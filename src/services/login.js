const jwt = require('jsonwebtoken');
const { isValid } = require('../validation/login');
const Models = require('../models/login');

const createToken = (response) => {
  const { password, ...userWithoutPassword } = response;
  const secret = 'senha';

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ userWithoutPassword }, secret, jwtConfig);
  return { token };
};

const getLogin = async (email, password) => {
  const isValidEmail = isValid(email, true);
  const isValidPassword = isValid(password);
  const response = await Models.findBy(email, password);

  if (isValidEmail) return isValidEmail;
  if (isValidPassword) return isValidPassword;

  if (!response) {
    return {
      err: {
        message: 'Incorrect username or password', code: 401,
      },
    };
  }

  return createToken(response);
};

module.exports = {
  getLogin,
};
