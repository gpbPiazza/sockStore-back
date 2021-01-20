const joi = require('joi');

const create = joi.object({
  name: joi.string().min(2).max(50).required(),
});

module.exports = { create };
