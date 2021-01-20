require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./utils/loadRelationships');

const adminRouter = require('./routers/adminRouter');
const productsRouter = require('./routers/productsRouter');

const app = express();

app.use(cors());
app.use(express.json());

// Admin
app.use('/admin', adminRouter);

//Products
app.use('/products', productsRouter);

module.exports = app;
