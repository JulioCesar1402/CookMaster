const router = require('express').Router();
const Controller = require('../controllers/recipes');

router.post('/', Controller.create);

router.get('/', (_req, res) => {
  const message = 'Está funcionando';
  return res.status(200).json({ message });
});

module.exports = router;