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
};
