const joi = require('joi');

const create = joi.object({
  name: joi.string().min(2).max(50).required(),
  price: joi.number().positive().precision(2).required(),
  size: joi.string().min(1).max(2).required(),
  description: joi.string().min(5).required(),
  stock: joi.number().integer().positive().required(),
  categoriesId: joi.array().items(joi.number().integer().required()).required(),
  photos: joi.array().items(joi.string().uri().required()).required(),
});

module.exports = { create };
