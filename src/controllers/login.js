const Services = require('../services/login');

const getLogin = async (req, res) => {
  const { email, password } = req.body;

  const isValidToCreate = await Services.getLogin(email, password);

  if (isValidToCreate.err) {
    const { message, code } = isValidToCreate.err;
    return res.status(code).json({ message });
  }

  return res.status(200).json(isValidToCreate);
};

module.exports = {
  getLogin,
};
