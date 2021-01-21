const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class Address extends Sequelize.Model {}

Address.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    cep: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    street: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    complement: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    neighborhood: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    clientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id',
      },
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
    modelName: 'address',
  },
);

module.exports = Address;
