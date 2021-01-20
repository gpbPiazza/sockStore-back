const express = require('express');

const router = express.Router();

const categoriesSchemas = require('../schemas/categoriesSchemas');
const authAdminMiddleware = require('../middlewares/authenticationAdmin');
const cateogiresController = require('../controllers/cateogiresController');
const ConflictError = require('../errors/ConflictError');

router.post('/', authAdminMiddleware, async (req, res) => {
  const categoryParams = req.body;

  const { error } = categoriesSchemas.create.validate(categoryParams);
  if (error) return res.status(422).send({ error: error.detail[0].message });

  try {
    const category = await cateogiresController.create(categoryParams);
    return res.status(201).send(category);
  } catch (e) {
    if (e instanceof ConflictError) return res.status(409).send({ error: 'This category name its already exists' });
    console.log(e);
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

module.exports = router;
