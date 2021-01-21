const { Op } = require('sequelize');
const sequelize = require('../utils/database');
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

  const photosWithProductId = photos.map((photo) => ({ photo, productId }));
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

function getById(id) {
  return Product.findByPk(id, {
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
  });
}

async function putProduct(id, params) {
  const {
    name, price, size, description, stock, categoriesId, photos,
  } = params;

  const product = await Product.findByPk(id);
  const productId = product.id;

  await product.update({
    name, price, size, description, stock,
  });

  if (photos) {
    await Photo.destroy({ where: { productId } });
    const photosWithProductId = photos.map((photo) => ({ photo, productId }));
    await Photo.bulkCreate(photosWithProductId, { attributes: ['id', 'photo'] });
  }

  if (categoriesId) {
    await CategoriesProduct.destroy({ where: { productId } });
    const categoriesWithProductId = categoriesId.map((categoryId) => ({
      categoryId, productId,
    }));
    await CategoriesProduct.bulkCreate(categoriesWithProductId);
  }

  return Product.findByPk(id, {
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
  });
}

async function count() {
  return Product.count();
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

async function deleteProduct(productId) {
  const product = await Product.findByPk(productId);
  if (!product) throw new NotFoundError();

  const relationship = await CategoriesProduct.findAll({ where: { productId } });
  await relationship.destroy();

  const productPhotos = await Photo.findAll({ where: { productId } });
  await productPhotos.destroy();

  await product.destroy();
  return product;
}

module.exports = {
  getProductInformations,
  createProduct,
  deleteProduct,
  count,
  getAllProducts,
  getById,
  putProduct,
  getHighlightProducts,
};
