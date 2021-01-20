const express = require('express');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {

  } catch (err) {
    if (err instanceof NotFoundError) {
      res.status(404).send({ error: 'Produto não encontrado!' });
    } else {
      res.status(500).send({ error: 'call someone' });
    }
  }
});

module.exports = router;
