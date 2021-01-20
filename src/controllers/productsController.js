const NotFoundError = require('../errors/NotFoundError');
const CategoriesProduct = require('../models/CategoriesProduct');
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

  const existingCategories = await Category.findAll({ where: { id: categoriesId }, attributes: ['id', 'name'] });
  if (existingCategories.length !== categoriesId.length) throw new NotFoundError();

  const product = await Product.create({
    name, price, size, description, stock,
  });
  const productId = product.id;

  const categoriesWithProductId = categoriesId.map((category) => ({
    categoryId: category, productId,
  }));
  await CategoriesProduct.bulkCreate(categoriesWithProductId);

  const photosWithProductId = photos.map((photo) => ({ photo, productId: product.id }));
  const photosCreated = await Photo.bulkCreate(photosWithProductId, { attributes: ['id', 'photo'] });

  return {
    ...product.dataValues,
    photos: photosCreated,
    categories: existingCategories,
  };
}

function getAllProducts(offset, limit) {
  return Product.findAll({
    include: [{
      model: Category,
      attributes: ['id', 'name'],
      through: {
        model: CategoriesProduct,
        attributes: [],
      },
    },
    {
      model: Photo,
      attributes: ['id', 'photo'],
    }],
    offset,
    limit,
  });
}

async function count() {
  return Product.count();
}

module.exports = {
  getProductInformations,
  createProduct,
  count,
  getAllProducts,
};
