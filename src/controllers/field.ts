import { Request, Response } from "express";
import { DuplicatedEntityError, ServerError, ValidationError } from "../helpers/apiError";
import { FieldInput, KnexError } from "../types";
import { fieldValidator } from "../validators";

export async function createField(req: Request, res: Response) {
  const fieldInput: FieldInput = req.body;

  const { error } = fieldValidator.validate(fieldInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbField = await req.db.FieldRepository.findOneBy({ campo: fieldInput.campo });

  if (dbField) {
    throw new DuplicatedEntityError("There is already a field with this text");
  }

  const newField = await req.db.FieldRepository.insert(fieldInput);

  return res.status(200).send(newField);
}

export async function getFields(req: Request, res: Response) {
  try {
    const dbFields = await req.db.FieldRepository.findAll();

    return res.status(200).send(dbFields);
  } catch (error) {
    console.log("Error on Getting Fields: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
