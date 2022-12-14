import Joi from "joi";

export const secureNoteSchema = Joi.object().keys({
    title : Joi.string().max(50).required(),
    note : Joi.string().max(1000).required()
})