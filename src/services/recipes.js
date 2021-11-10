const { isValid } = require('../validation/recipes');
const Models = require('../models/recipes');

const create = async (name, ingredients, preparation, userId) => {
  const isValidName = isValid(name);
  const isValidIngredients = isValid(ingredients);
  const isValidPreparation = isValid(preparation);

  if (isValidName) return isValidName;
  if (isValidIngredients) return isValidIngredients;
  if (isValidPreparation) return isValidPreparation;

  const createRecipe = await Models.create(name, ingredients, preparation, userId);
  return createRecipe;
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

const update = async (name, ingredients, preparation, recipeId) => {
  const isValidName = isValid(name);
  const isValidIngredients = isValid(ingredients);
  const isValidPreparation = isValid(preparation);

  if (isValidName) return isValidName;
  if (isValidIngredients) return isValidIngredients;
  if (isValidPreparation) return isValidPreparation;

  const updateRecipe = await Models.update(name, ingredients, preparation, recipeId);
  return updateRecipe;
};

const remove = async (id) => {
  const response = await Models.remove(id);
  return response;
};

const uploadImage = async (recipeId) => {
  const photoFile = `localhost:3000/src/uploads/${recipeId}.jpeg`;

  const updateRecipe = await Models.uploadImage(photoFile, recipeId);
  if (!updateRecipe) {
    return {
      err: {
        message: 'recipe not found', code: '404',
      },
    };
  }
  return updateRecipe;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
  uploadImage,
};
