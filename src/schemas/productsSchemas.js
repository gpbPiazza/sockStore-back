const joi = require('joi');

const create = joi.object({
  name: joi.string().min(2).max(50).required(),
  price: joi.number().required(),
  size: joi.string().min(1).max(2).required(),
  description: joi.string().min(5).required(),
  stock: joi.number().integer().positive().required(),
  categoriesId: joi.array().items(joi.number().integer().required()).required(),
  photos: joi.array().items(joi.string().uri().required()).required(),
});

const put = joi.object({
  name: joi.string().min(2).max(50),
  price: joi.number(),
  size: joi.string().min(1).max(2),
  description: joi.string().min(5),
  stock: joi.number().integer().positive(),
  categoriesId: joi.array().items(joi.number().integer()),
  photos: joi.array().items(joi.string().uri().required()),
});

module.exports = { create, put };
