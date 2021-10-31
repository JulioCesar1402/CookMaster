const error = {
  err: {
    message: 'Invalid entries. Try again.', code: 400,
  },
};

const isValid = (params, hasEmail) => {
  if (!params || params.length === 0) return error;

  if (hasEmail) {
    const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
    const verify = validEmail.test(params);
    if (!verify) return error;
  }

  return null;
};

const verifyIfIsARootUser = (name, email, password) => {
  if (name === 'admin' && email === 'root@email.com' && password === 'admin') {
    return 'admin';
  }
  return 'user';
};

module.exports = {
  isValid,
  verifyIfIsARootUser,
};