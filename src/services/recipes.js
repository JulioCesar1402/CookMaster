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

module.exports = {
  create,
};
