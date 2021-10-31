const error = {
  err: {
    message: 'Invalid entries. Try again.', code: 400,
  },
};

const isValid = (params) => {
  if (!params || params.length === 0) return error;
  return null;
};

module.exports = {
  isValid,
};