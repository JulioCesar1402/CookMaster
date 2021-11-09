const router = require('express').Router();
const Controller = require('../controllers/recipes');

router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.get('/:id', Controller.findById);
router.put('/:id', Controller.alreadyExists, Controller.whoIsThisLogin, Controller.update);

router.get('/', (_req, res) => {
  const message = 'Está funcionando';
  return res.status(200).json({ message });
});

module.exports = router;