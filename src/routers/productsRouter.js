const express = require('express');
const ProductNotFoundError = require('../errors/ProductNotFoundError');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {

  } catch (err) {
    if (err instanceof ProductNotFoundError) {
      res.status(404).send({ error: 'Produto não encontrado!' });
    } else {
      res.status(500).send({ error: 'call someone' });
    }
  }
});

module.exports = router;
