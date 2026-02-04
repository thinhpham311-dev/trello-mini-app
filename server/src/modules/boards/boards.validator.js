const Joi = require('joi');

const boardValidator = {
  createBoard: {
    body: Joi.object({
      name: Joi.string()
        .min(1)
        .max(100)
        .required()
        .messages({
          'string.empty': 'Board name is required',
          'string.min': 'Board name must be at least 1 character',
          'string.max': 'Board name cannot exceed 100 characters',
          'any.required': 'Board name is required'
        }),
      description: Joi.string()
        .max(500)
        .optional()
        .allow('')
        .messages({
          'string.max': 'Description cannot exceed 500 characters'
        })
    })
  },
};

module.exports = {
  boardValidator: boardValidator
};