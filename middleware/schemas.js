const Joi = require("joi");

const schemas = {
    taskPOST: Joi.object().keys({
        task: Joi.string().trim().required(),
        description: Joi.string().required()
    }),
    taskParams: Joi.object().keys({
        id: Joi.number()
    }),
};

module.exports = schemas;
