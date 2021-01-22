/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const Client = require('../models/Client');
const Address = require('../models/Address');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrdersProduct = require('../models/OrdersProduct');
const NotFoundError = require('../errors/NotFoundError');

async function verifyProductsExist(products) {
  const productsIds = products.map((p) => p.productId);
  const productsWithIds = await Product.findAll({ where: { id: productsIds } });
  return productsIds.length === productsWithIds.length;
}

async function postOrder(body) {
  const { client, address, products } = body;
  const productExist = await verifyProductsExist(products);
  if (!productExist) throw new NotFoundError();

  const postedClient = await Client.create({ ...client });
  await Address.create({ clientId: postedClient.id, ...address });
  const postedOrder = await Order.create({ clientId: postedClient.id });
  for (let i = 0; i < products.length; i += 1) {
    const productToUpdate = await Product.findByPk(products[i].productId);
    productToUpdate.stock -= 1;
    await productToUpdate.save();
    await OrdersProduct.create({
      orderId: postedOrder.id,
      productId: products[i].productId,
      unitPrice: products[i].price,
    });
  }
}

module.exports = {
  postOrder,
};
