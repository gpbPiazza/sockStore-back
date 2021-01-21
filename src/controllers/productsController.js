const { Op } = require('sequelize');
const sequelize = require('../utils/database');
const NotFoundError = require('../errors/NotFoundError');
const Category = require('../models/Category');
const Photo = require('../models/Photo');
const Product = require('../models/Product');

async function getProductInformations(id) {
  const product = await Product.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Category,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
      {
        model: Photo,
        attributes: ['id', 'photo'],
      },
    ],
    attributes: ['id', 'name', 'price', 'size', 'description', 'stock'],
  });

  if (!product) throw new NotFoundError();

  return product;
}

async function getHighlightProducts() {
  const orderedProductsBySales = await Product.findAll({
    where: {
      stock: {
        [Op.gt]: 0,
      },
    },
    attributes: [
      'id',
      'name',
      'price',
      [sequelize.literal('(SELECT COUNT(*) FROM "ordersProducts" WHERE "ordersProducts"."productId" = Product.id)'), 'salesCount'],
    ],
    include: [{
      model: Photo,
      attributes: ['id', 'photo'],
    }],
    order: [[sequelize.literal('"salesCount"'), 'DESC']],
  });
  if (orderedProductsBySales.length < 4) {
    return orderedProductsBySales;
  }
  return [
    orderedProductsBySales[0],
    orderedProductsBySales[1],
    orderedProductsBySales[2],
    orderedProductsBySales[3],
  ];
}

async function createProduct(params) {
  const {
    name, price, size, description, stock, categoriesId, photos,
  } = params;
  const product = await Product.create({
    name, price, size, description, stock,
  });
}

module.exports = {
  getProductInformations,
  getHighlightProducts,
};
