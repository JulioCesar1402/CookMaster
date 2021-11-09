const { ObjectId } = require('mongodb');
const connection = require('../api/connection');

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

const findAll = async () => {
  const response = await connection()
    .then((db) => db.collection('recipes').find().toArray());
  return response;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const response = await connection()
    .then((db) => db.collection('recipes').findOne(new ObjectId(id)));
  return response;
};

const update = async (name, ingredients, preparation, recipeId) => {
  if (!ObjectId.isValid(recipeId)) {
    return null;
  }

  const recipeInfo = {
    name, ingredients, preparation,
  };
  await connection()
    .then((db) => db.collection('recipes').updateOne(
      { _id: ObjectId(recipeId) },
      {
        $set: recipeInfo,
      },
    ));

  const recipe = await findById(recipeId);
  return recipe;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  await connection()
    .then((db) => db.collection('recipes').deleteOne({ _id: ObjectId(id) }));
  return '';
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
