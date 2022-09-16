import Joi from "joi";

export const activityValidator = Joi.object({
  atividade: Joi.string().required(),
  fieldId: Joi.string().required(),
  pontos: Joi.number().required(),
  peso: Joi.number().required(),
  label: Joi.string().required(),
});
