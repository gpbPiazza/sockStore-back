const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');
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
    return res.status(500).send({ error: 'call someone' });
  }
});

module.exports = router;
