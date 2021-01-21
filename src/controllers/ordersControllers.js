/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const Client = require('../models/Address');
const Address = require('../models/Address');
const Product = require('../models/Product');
const Order = require('../models/Order');
const OrdersProduct = require('../models/OrdersProduct');

async function postOrder(body) {
  const { client, address, products } = body;
  const postedClient = await Client.create(client);
  const addressToPost = {
    clientId: postedClient.id,
    cep: address.cep,
    street: address.street,
    city: address.city,
    neighborhood: address.neighborhood,
    state: address.state,
    number: address.number,
    complement: address.complement,
  };
  await Address.create(addressToPost);
  const postedOrder = await Order.create({ clientId: postedClient.id });
  for (const product of products) {
    const productToUpdate = await Product.findByPk(product.id);
    productToUpdate.stock -= 1;
    await productToUpdate.save();
    await OrdersProduct.create({
      orderId: postedOrder.id,
      productId: product.id,
      unitPrice: product.price,
    });
  }
}

module.exports = {
  postOrder,
};
