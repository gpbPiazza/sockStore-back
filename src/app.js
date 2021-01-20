require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./utils/loadRelationships');

const adminRouter = require('./routers/adminRouter');
const categoriesRouter = require('./routers/categoriesRouter');

const app = express();

app.use(cors());
app.use(express.json());

// Admin
app.use('/admin', adminRouter);

// Categories
app.use('/categories', categoriesRouter);

// Products
// app.use('/products', )

module.exports = app;
