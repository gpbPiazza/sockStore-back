const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class Order extends Sequelize.Model {}

Order.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    clientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id',
      },
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    modelName: 'order',
  },
);

module.exports = Order;
