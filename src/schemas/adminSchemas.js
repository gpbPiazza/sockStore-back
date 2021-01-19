const joi = require('joi');

const login = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { login };
