const Category = require('../models/Category');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');

async function create({ name }) {
  const findCategoryByName = await Category.findOne({ where: { name } });
  if (findCategoryByName) throw new ConflictError();

  const category = await Category.create({ name });
  return { id: category.id, name: category.name };
}

function getAll(offset, limit) {
  return Category.findAll({ attributes: ['id', 'name'], offset, limit });
}

async function deleteCategory(categoryId) {
  const category = await Category.findByPk(categoryId);
  if (!category) throw new NotFoundError();
  await category.destroy();
  return category;
}

async function findCategoryById(categoryId) {
  const category = await Category.findByPk(categoryId);
  if (!category) throw new NotFoundError();
  return category;
}

async function updateCategory({ categoryId, name }) {
  const category = await Category.findByPk(categoryId);
  if (!category) throw new NotFoundError();
  category.name = name;
  await category.save();
  return category;
}

function count() {
  return Category.count();
}

module.exports = {
  create,
  getAll,
  deleteCategory,
  count,
  updateCategory,
  findCategoryById,
};
