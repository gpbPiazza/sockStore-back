const Client = require('../models/Client');
const Adress = require('../models/Address');

function getAllClients(offset, limit) {
  return Client.findAll({ model: Adress, offset, limit });
}

function count() {
  return Client.count();
}

function getClientById(clientId) {
  return Client.findByPk(clientId, { model: Adress });
}

module.exports = {
  getAllClients,
  count,
  getClientById,
};
