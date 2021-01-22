/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');
const categoriesSchemas = require('../schemas/categoriesSchemas');
const ordersController = require('../controllers/ordersControllers');
const productsSchemas = require('../schemas/productsSchemas');
const authAdminMiddleware = require('../middlewares/authenticationAdmin');
const productsController = require('../controllers/productsController');
const clientsController = require('../controllers/clientsController');
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

router.post('/logout', authAdminMiddleware, (req, res) => {
  adminController.logout();
  return res.sendStatus(200);
});

router.post('/categories', authAdminMiddleware, async (req, res) => {
  const categoryParams = req.body;

  const { error } = categoriesSchemas.create.validate(categoryParams);
  if (error) return res.status(422).send({ error: error.details[0].message });

  try {
    const category = await categoriesController.create(categoryParams);
    const total = await categoriesController.count();
    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(201)
      .send(category);
  } catch (e) {
    console.log(e, 'aiaiaiaia');
    if (e instanceof ConflictError) return res.status(409).send({ error: 'This category name its already exists' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/categories', authAdminMiddleware, async (req, res) => {
  const offset = parseInt(req.query._start);
  const limit = parseInt(req.query._end) - offset;
  const categoryId = parseInt(req.query['categories.id']);

  try {
    const categories = await categoriesController.getAll(offset, limit, categoryId);
    const total = await categoriesController.count();
    return res
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
    const category = await categoriesController.deleteCategory(categoryId);
    const total = await categoriesController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200).send(category);
  } catch (e) {
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'category not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/categories/:id', authAdminMiddleware, async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoriesController.findCategoryById(categoryId);
    const total = await categoriesController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200).send(category);
  } catch (e) {
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'category not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.put('/categories/:id', authAdminMiddleware, async (req, res) => {
  const categoryParams = req.body;
  const { name } = categoryParams;

  const { error } = categoriesSchemas.update.validate(categoryParams);
  if (error) return res.status(422).send({ error: error.details[0].message });

  try {
    const categoryId = req.params.id;
    const category = await categoriesController.updateCategory({ categoryId, name });
    const total = await categoriesController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200).send(category);
  } catch (e) {
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'category not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.post('/products', authAdminMiddleware, async (req, res) => {
  const productParams = req.body;
  try {
    const { error } = productsSchemas.create.validate(productParams);
    if (error) return res.status(422).send({ error: error.details[0].message });

    const product = await productsController.createProduct(productParams);
    const total = await productsController.count();
    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(201)
      .send(product);
  } catch (e) {
    console.log(e);
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'Categories not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/products', authAdminMiddleware, async (req, res) => {
  const offset = parseInt(req.query._start);
  const limit = parseInt(req.query._end) - offset;

  try {
    const products = await productsController.getAllProducts(offset, limit);
    const total = await productsController.count();
    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200)
      .send(products);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/products/:id', authAdminMiddleware, async (req, res) => {
  try {
    const product = await productsController.getProductByIdAdmin(+req.params.id);
    return res
      .status(200)
      .send(product);
  } catch (e) {
    console.log(e);
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'Product not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.put('/products/:id', authAdminMiddleware, async (req, res) => {
  try {
    const { error } = productsSchemas.put.validate(req.body);
    if (error) return res.status(422).send({ error: error.details[0].message });

    const product = await productsController.updateProduct(+req.params.id, req.body);
    return res
      .status(200)
      .send(product);
  } catch (e) {
    console.log(e);
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'Product not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.delete('/products/:id', authAdminMiddleware, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productsController.deleteProduct(productId);
    const total = await productsController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200).send(product);
  } catch (e) {
    console.log(e);
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'product not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/clients', authAdminMiddleware, async (req, res) => {
  const offset = parseInt(req.query._start);
  const limit = parseInt(req.query._end) - offset;

  try {
    const clients = await clientsController.getAllClients(offset, limit);
    const total = await clientsController.count();
    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200)
      .send(clients);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/clients/:id', authAdminMiddleware, async (req, res) => {
  try {
    const client = await clientsController.getClientById(+req.params.id);
    const total = await clientsController.count();
    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200)
      .send(client);
  } catch (e) {
    console.log(e);
    if (e instanceof NotFoundError) return res.status(404).send({ error: 'client not found' });
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/orders', authAdminMiddleware, async (req, res) => {
  try {
    const client = await ordersController.getAllOrders();
    const total = await ordersController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200)
      .send(client);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

router.get('/orders/:id', authAdminMiddleware, async (req, res) => {
  try {
    const order = await ordersController.getOrderById(+req.params.id);
    const total = await ordersController.count();

    return res
      .header('Access-Control-Expose-Headers', 'X-Total-Count')
      .set('X-Total-Count', total)
      .status(200)
      .send(order);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ error: 'call the responsible person' });
  }
});

module.exports = router;
