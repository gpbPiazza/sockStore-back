const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class Photo extends Sequelize.Model {}

Photo.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    photo: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
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
    modelName: 'photo',
    onDelete: 'cascade',
  },
);

module.exports = Photo;
