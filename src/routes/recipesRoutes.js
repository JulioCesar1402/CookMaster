const router = require('express').Router();
const multer = require('multer');
const Controller = require('../controllers/recipes');
const { alreadyExists, whoIsLogin } = require('../middleware/recipeMiddleware');

router.post('/', Controller.create);
router.get('/', Controller.findAll);
router.get('/:id', Controller.findById);
router.put('/:id', alreadyExists, whoIsLogin, Controller.update);
router.delete('/:id', alreadyExists, whoIsLogin, Controller.remove);

const storage = multer.diskStorage({
  destination: 'src/uploads/',
  filename: (req, _file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

const upload = multer({ storage });
// source: https://maximorlov.com/fix-unexpected-field-error-multer/
/*
  Ever see if the fieldName is the same as in the test
*/
router.put(
  '/:id/image/',
  alreadyExists, whoIsLogin,
  upload.single('image'),
  Controller.uploadImage,
);

router.get('/', (_req, res) => {
  const message = 'Está funcionando';
  return res.status(200).json({ message });
});

module.exports = router;