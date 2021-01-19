require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./utils/loadRelationships');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

module.exports = app;
