const { isValid } = require('../validation/user');
const Models = require('../models/user');

const create = async (name, email, password) => {
  const isValidName = isValid(name);
  const isValidEmail = isValid(email, true);
  const isValidPassword = isValid(password);
  const response = await Models.findByEmail(email);

  if (isValidName) return isValidName;
  if (isValidEmail) return isValidEmail;
  if (isValidPassword) return isValidPassword;

  if (response) {
    return {
      err: {
        message: 'Email already registered', code: 409,
      },
    };
  }

  const createProduct = await Models.create(name, email, password);
  return createProduct;
};

module.exports = {
  create,
};
