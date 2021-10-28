const filledError = {
  err: {
    message: 'All fields must be filled', code: 401,
  },
};

const IncorrectError = {
  err: {
    message: 'Incorrect username or password', code: 401,
  },
};

const isValid = (params, hasEmail) => {
  if (!params || params.length === 0) return filledError;

  if (hasEmail) {
    const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
    const verify = validEmail.test(params);
    if (!verify) return IncorrectError;
  }

  return null;
};

module.exports = {
  isValid,
};