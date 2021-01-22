/* eslint-disable no-param-reassign */
const { Sequelize } = require('sequelize');
const Client = require('../models/Client');
const Address = require('../models/Address');
const Product = require('../models/Product');
const OrdersProduct = require('../models/OrdersProduct');
const Order = require('../models/Order');

async function postOrder(client, address, products) {
  const postedClient = await Client.create({ client });
  const postedAddress = await Address.create({ clientId: postedClient.id, ...address });
  for (const product of products) {

  }
}

async function getAllOrders() {
  const orders = await Order.findAll({
    include: [{
      model: Product,
      attributes: ['id', 'name', 'size', 'description', 'stock'],
      through: {
        model: OrdersProduct,
        attributes: [
          'unitPrice',
          'quantity',
        ],
      },
    }],
  });

  orders.forEach((order) => {
    const { products } = order;
    let totalOrder = 0;
    products.forEach(({ ordersProduct }) => {
      const { quantity, unitPrice } = ordersProduct.dataValues;
      const subTotal = quantity * unitPrice;
      ordersProduct.dataValues.subTotal = subTotal;
      totalOrder += subTotal;
    });
    order.dataValues.totalOrder = totalOrder;
  });

  return orders;
}

function count() {
  return Order.count();
}

module.exports = {
  postOrder,
  count,
  getAllOrders,
};
