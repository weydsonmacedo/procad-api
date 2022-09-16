import Joi from "joi";

export const fieldValidator = Joi.object({
  campo: Joi.string().required(),
  observacao: Joi.string().allow(null),
});
