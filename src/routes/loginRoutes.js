const router = require('express').Router();
const Controller = require('../controllers/login');

router.post('/', Controller.getLogin);

router.get('/', (_req, res) => {
  const message = 'Está funcionando tbm';
  return res.status(200).json({ message });
});

module.exports = router;