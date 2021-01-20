const Category = require('../models/Category');
const ConflictError = require('../errors/ConflictError');

async function create({ name }) {
  const findCategoryByName = await Category.findOne({ where: { name } });
  if (findCategoryByName) throw new ConflictError();

  const category = await Category.create({ name });
  return { id: category.id, name: category.name };
}

module.exports = {
  create,
};
