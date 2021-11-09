const router = require('express').Router();
const Controller = require('../controllers/recipes');
const { alreadyExists, whoIsLogin } = require('../middleware/recipeMiddleware');

router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.get('/:id', Controller.findById);
router.put('/:id', alreadyExists, whoIsLogin, Controller.update);
router.delete('/:id', alreadyExists, whoIsLogin, Controller.remove);

router.get('/', (_req, res) => {
  const message = 'Está funcionando';
  return res.status(200).json({ message });
});

module.exports = router;