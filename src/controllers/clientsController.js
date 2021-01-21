const Client = require('../models/Client');
const Adress = require('../models/Address');

function getAllClients(offset, limit) {
  return Client.findAll({ model: Adress, offset, limit });
}
function count() {
  return Client.count();
}

module.exports = {
  getAllClients,
  count,
};
