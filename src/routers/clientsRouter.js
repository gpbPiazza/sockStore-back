const express = require('express');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();

const productsController = require('../controllers/productsController');
const categoriesController = require('../controllers/categoriesController');
const ordersController = require('../controllers/ordersControllers');
const orderSchemas = require('../schemas/orderSchemas');

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

router.get('/trendings', async (req, res) => {
  try {
    const orderedProductsBySales = await productsController.getTrendingProducts();
    return res.send(orderedProductsBySales);
  } catch (err) {
    return res.send({ error: 'call someone' });
  }
});

router.post('/orders', async (req, res) => {
  const orderParams = req.body;

  const { error } = orderSchemas.order.validate(orderParams);
  if (error) return res.status(422).send({ error: error.details[0].message });
  try {
    await ordersController.postOrder(req.body);
    return orderParams;
  } catch (err) {
    console.log(err);
    return res.send({ error: 'call someone' });
  }
});

module.exports = router;
