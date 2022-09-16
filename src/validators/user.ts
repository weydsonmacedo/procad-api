import Joi from "joi";
import { CivilStatus } from "../types";

export const userValidator = Joi.object({
  academicDegreeId: Joi.string().required(),
  birthdate: Joi.date().allow(null),
  careerId: Joi.string().required(),
  civilStatus: Joi.string()
    .valid(...Object.values(CivilStatus))
    .required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  //levelId: Joi.string().required(),
  nationalityId: Joi.string().required(),
  naturalidade: Joi.string().allow(null),
  password: Joi.string().required(),
  //roleId: Joi.string().required(),
  siape: Joi.string().required(),
  workload: Joi.number().allow(null),
});

export const ProfileValidator = Joi.object({
  id: Joi.string().required(),
  academicDegreeId: Joi.string().required(),
  birthdate: Joi.date().allow(null),
  careerId: Joi.string().required(),
  civilStatus: Joi.string()
    .valid(...Object.values(CivilStatus))
    .required(),  
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),  
  nationalityId: Joi.string().required(),
  naturalidade: Joi.string().allow(null),    
  siape: Joi.string().required(),
  workload: Joi.number().allow(null),
});
