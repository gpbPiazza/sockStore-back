const Client = require('../models/Client');
const Address = require('../models/Address');
const NotFoundError = require('../errors/NotFoundError');

function getAllClients(offset, limit) {
  return Client.findAll({ include: Address, offset, limit });
}

function count() {
  return Client.count();
}

async function getClientById(clientId) {
  const client = await Client.findByPk(clientId, { include: Address });
  if (!client) throw new NotFoundError();

  return client;
}

module.exports = {
  getAllClients,
  count,
  getClientById,
};
