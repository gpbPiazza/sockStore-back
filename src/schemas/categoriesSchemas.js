const joi = require('joi');

const create = joi.object({
  name: joi.string().min(2).max(50).required(),
});

const update = joi.object({
  name: joi.string().min(2).max(50).required(),
}).options({ allowUnknown: true });

module.exports = { create, update };
