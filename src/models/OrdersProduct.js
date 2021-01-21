const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class OrdersProduct extends Sequelize.Model {}

OrdersProduct.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    orderId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id',
      },
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    unitPrice: {
      type: Sequelize.DOUBLE,
      allowNull: false,
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
    modelName: 'ordersProduct',
  },
);

module.exports = OrdersProduct;
