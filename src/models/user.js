const connection = require('../connection/connection');

const create = async (name, email, password) => {
  const role = 'user';
  const response = await connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }));
  const user = {
    _id: response.insertedId, name, email, role,
  };
  return { user };
};

const findByEmail = async (email) => {
  const response = await connection()
    .then((db) => db.collection('users').findOne({ email }));
  return response;
};

module.exports = {
  create,
  findByEmail,
};
