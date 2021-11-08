const connection = require('../api/connection');

const findBy = async (email, password) => {
  const response = await connection()
    .then((db) => db.collection('users').findOne({ email, password }));
  return response;
};

module.exports = {
  findBy,
};
