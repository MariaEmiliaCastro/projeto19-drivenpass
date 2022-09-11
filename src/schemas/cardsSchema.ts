import Joi from "joi";

export const cardSchema = Joi.object().keys({
    label: Joi.string().required(), 
    number: Joi.string().creditCard().required(),
    name: Joi.string().required(),
    cvc: Joi.string().required().regex(/^\d+$/).max(3),
    expirationDate: Joi.string().required(),
    password: Joi.string().required().regex(/^\d+$/).max(4),
    type: Joi.string().equal("credit", "debit", "both").required(),
    isVirtual: Joi.boolean().required()
})