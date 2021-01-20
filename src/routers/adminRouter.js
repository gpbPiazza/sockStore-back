const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');
const categoriesSchemas = require('../schemas/categoriesSchemas');
const authAdminMiddleware = require('../middlewares/authenticationAdmin');
const categoriesController = require('../controllers/categoriesController');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const Unauthorized = require('../errors/Unauthorized');
const adminSchemas = require('../schemas/adminSchemas');

router.post('/login', (req, res) => {
  const loginParams = req.body;

  const { error } = adminSchemas.login.validate(loginParams);
  if (error) return res.status(422).send({ error: error.details[0].message });

  try {
    const adminValid = adminController.login(loginParams);
    return res.status(201).send(adminValid);
  } catch (e) {
    if (e instanceof Unauthorized) return res.status(401).send({ error: 'Email ou senha incorretos' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.post('/categories', authAdminMiddleware, async (req, res) => {
  const categoryParams = req.body;

  const { error } = categoriesSchemas.create.validate(categoryParams);
  if (error) return res.status(422).send({ error: error.detail[0].message });

  try {
    const category = await categoriesController.create(categoryParams);
    const total = await categoriesController.count();
    res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(201)
      .send(category);
  } catch (e) {
    if (e instanceof ConflictError) return res.status(409).send({ error: 'This category name its already exists' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/categories', authAdminMiddleware, async (req, res) => {
  try {
    const categories = await categoriesController.getAll();
    const total = await categoriesController.count();
    res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200).send(categories);
  } catch (e) {
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.delete('/categories/:id', authAdminMiddleware, async (req, res) => {
  try {
    const categoryId = req.params.id;
    await categoriesController.deleteCategory(categoryId);
    const total = await categoriesController.count();

    res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .sendStatus(200);
  } catch (e) {
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'category not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

module.exports = router;
