const Client = require('../models/Address');
const Address = require('../models/Address');

async function postOrder(client, address, products) {
  const postedClient = await Client.create({ client });
  const postedAddress = await Address.create({ clientId: postedClient.id, ...address });
  for (const product of products) {

  }
}

module.exports = {
  postOrder,
};
