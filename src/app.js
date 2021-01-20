require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./utils/loadRelationships');

const adminRouter = require('./routers/adminRouter');
const clientsRouter = require('./routers/clientsRouter');

const app = express();

app.use(cors());
app.use(express.json());

// Admin
app.use('/admin', adminRouter);

// Clients
app.use('/clients', clientsRouter);

module.exports = app;
