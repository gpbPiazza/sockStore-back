const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');
const NotFoundError = require('../errors/NotFoundError');

router.get('/:id', async (req, res) => {
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

module.exports = router;
