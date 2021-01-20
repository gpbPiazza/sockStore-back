const joi = require('joi');

const name = joi.object({
  name: joi.string().min(2).max(50).required(),
});

module.exports = { name };
