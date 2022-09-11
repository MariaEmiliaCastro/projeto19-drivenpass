import Joi from "joi";

export const wiFiSchema = Joi.object().keys({
    label : Joi.string().required(),
    network : Joi.string().required(),
    password : Joi.string().required()
});