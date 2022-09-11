import Joi from "joi";

export const credentialSchema = Joi.object().keys({
    label : Joi.string().required(),
    url : Joi.string().uri().required(),
    username : Joi.string().required(),
    password : Joi.string().required()
});