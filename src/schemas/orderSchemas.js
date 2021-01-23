const joi = require('joi');

const order = joi.object({
  client: joi.object({
    name: joi.string().min(2).max(50).required(),
    email: joi.string().email().required(),
    cpf: joi.string().pattern(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/).required(),
  }).required(),
  address: joi.object({
    cep: joi.string().pattern(/^\d{5}-\d{3}$/).required(),
    street: joi.string().min(2).max(50).required(),
    number: joi.number().integer().required(),
    complement: joi.string().min(2).max(50).required(),
    neighborhood: joi.string().min(2).max(50).required(),
    city: joi.string().min(2).max(50).required(),
    state: joi.string().min(2).max(50).required(),
  }).required(),
  products: joi.array().items(joi.object({
    productId: joi.number().integer().required(),
    name: joi.string().min(2).max(50).required(),
    quantity: joi.number().integer().required(),
    price: joi.number().required(),
  })).required(),
}).options({ allowUnknown: true });

module.exports = { order };
