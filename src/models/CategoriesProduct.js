const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class CategoriesProduct extends Sequelize.Model {}

CategoriesProduct.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
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
    modelName: 'categoriesProduct',
    onDelete: 'cascade',
  },
);

module.exports = CategoriesProduct;
