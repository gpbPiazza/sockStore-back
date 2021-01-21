const Client = require('../models/Client');
const Adress = require('../models/Address');
const NotFoundError = require('../errors/NotFoundError');

function getAllClients(offset, limit) {
  return Client.findAll({ model: Adress, offset, limit });
}

function count() {
  return Client.count();
}

async function getClientById(clientId) {
  const client = await Client.findByPk(clientId, { model: Adress });
  if (!client) throw new NotFoundError();

  return client;
}

module.exports = {
  getAllClients,
  count,
  getClientById,
};
