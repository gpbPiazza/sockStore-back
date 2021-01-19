const { Error } = require('sequelize');

class Unauthorized extends Error {}

module.exports = Unauthorized;
