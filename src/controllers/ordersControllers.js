const Client = require('../models/Address');
const Address = require('../models/Address');
const Product = require('../models/Product');
const Order = require('../models/Order');

async function postOrder(client, address, products) {
  const postedClient = await Client.create({ client });
  const postedAddress = await Address.create({ clientId: postedClient.id, ...address });
  for (const product of products) {

  }
}

function getAllOrders() {
  return Order.findAll({
    model: Client,
    include: [{
      model: Product,
      attributes: ['id', 'name', 'description', 'stock'],
    }],

  });
}

// include: [{
//   model: Category,
//   attributes: ['id', 'name'],
//   through: {
//     model: CategoriesProduct,
//     attributes: [],
//   },
// },
// {
//   model: Photo,
//   attributes: ['id', 'photo'],
// }],
// offset,
// limit,
// }

module.exports = {
  postOrder,
  getAllOrders,
};
