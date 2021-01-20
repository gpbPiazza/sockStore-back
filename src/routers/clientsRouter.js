const express = require('express');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();

const productsController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');

router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsController.getProductInformations(id);
    return res.send(product);
  } catch (err) {
    if (err instanceof NotFoundError) {
      return res.status(404).send({ error: 'Produto não encontrado!' });
    }
    return res.status(500).send({ error: 'call someone' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categorizedProducts = await categoriesController.getCategorizedProducts();
    return res.send(categorizedProducts);
  } catch (err) {
    return res.send({ error: 'call someone' });
  }
});

module.exports = router;
