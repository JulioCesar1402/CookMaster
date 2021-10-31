const connection = require('../connection/connection');

const create = async (name, ingredients, preparation, userId) => {
  const recipeInfo = {
    name, ingredients, preparation, userId,
  };
  const response = await connection()
    .then((db) => db.collection('recipes').insertOne(recipeInfo));
  const recipe = {
    _id: response.insertedId, ...recipeInfo,
  };
  return { recipe };
};

module.exports = {
  create,
};
