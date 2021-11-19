const router = require('express').Router();
const Controller = require('../controllers/user');

router.post('/', Controller.create);

module.exports = router;