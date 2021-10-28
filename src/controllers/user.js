const Services = require('../services/user');

const create = async (req, res) => {
  const { name, email, password } = req.body;

  const isValidToCreate = await Services.create(name, email, password);

  if (isValidToCreate.err) {
    const { message, code } = isValidToCreate.err;
    return res.status(code).json({ message });
  }

  return res.status(201).json(isValidToCreate);
};

module.exports = {
  create,
};
