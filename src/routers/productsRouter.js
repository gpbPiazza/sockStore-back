const express = require('express');
const NotFoundError = require('../errors/NotFoundError');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {

  } catch (err) {
<<<<<<< HEAD
    if (err instanceof ProductNotFoundError) {
=======
    if (err instanceof NotFoundError) {
>>>>>>> 48c37073ca400727858de4ed054380f06f07d72c
      res.status(404).send({ error: 'Produto não encontrado!' });
    } else {
      res.status(500).send({ error: 'call someone' });
    }
  }
});

module.exports = router;
