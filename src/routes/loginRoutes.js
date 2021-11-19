const router = require('express').Router();
const Controller = require('../controllers/login');

router.post('/', Controller.getLogin);

module.exports = router;