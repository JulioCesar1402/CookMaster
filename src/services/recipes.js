const { isValid } = require('../validation/recipes');
const Models = require('../models/recipes');

const create = async (name, ingredients, preparation, userId) => {
  const isValidName = isValid(name);
  const isValidIngredients = isValid(ingredients);
  const isValidPreparation = isValid(preparation);

  if (isValidName) return isValidName;
  if (isValidIngredients) return isValidIngredients;
  if (isValidPreparation) return isValidPreparation;

  const createProduct = await Models.create(name, ingredients, preparation, userId);
  return createProduct;
};

const findAll = async () => {
  const response = await Models.findAll();
  return response;
};

const findById = async (id) => {
  const response = await Models.findById(id);
  if (!response) {
    return {
      err: {
        message: 'recipe not found', code: '404',
      },
    };
  }
  return response;
};

module.exports = {
  create,
  findAll,
  findById,
};
