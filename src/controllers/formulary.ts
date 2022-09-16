import { DBFormularyAnswer } from './../db';
import { Request, Response } from "express";
import { InvalidActionError, NotFoundError, ServerError, ValidationError } from "../helpers/apiError";
import { FormularyAnswerInput, FormularyInput, FormularyStatus, KnexError } from "../types";
import { formularyAnswersValidator, formularyValidator } from "../validators";

export async function createFormulary(req: Request, res: Response) {
  const formularyInput: FormularyInput = req.body;

  const { error } = formularyValidator.validate(formularyInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbRole = await req.db.RoleRepository.get(formularyInput.roleId);
  const dbLevel = await req.db.LevelRepository.get(formularyInput.levelId);

  if (!dbRole || !dbLevel) {
    throw new NotFoundError(`Some career, role, level, academicDegree or nationality was wronged informed.`);
  }

  try {
    const dbFormulary = await req.db.FormularyRepository.insert(
      {
        type: formularyInput.type,
        from: formularyInput.period.from,
        to: formularyInput.period.to,
        userId: req.decodedJTW.id,
        status: FormularyStatus.ON_PROGRESS,
        roleId: dbRole.id,
        levelId: dbLevel.id,
        classId: formularyInput.classId,
        comission: JSON.stringify(formularyInput.comission),
      }
    );

    return res.status(200).send(dbFormulary);
  } catch (error) {
    console.log("Error on Creating Formulary: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}

export async function upsertFormularyAnswer(req: Request, res: Response) {
  const formularyAnswerInput: FormularyAnswerInput = req.body;

  const { error } = formularyAnswersValidator.validate(formularyAnswerInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  if (!formularyAnswerInput.files.length) {
    throw new InvalidActionError("É necessário incluir os comprovantes.");
  }

  const dbFormulary = await req.db.FormularyRepository.get(formularyAnswerInput.formularyId);

  if (!dbFormulary) {
    throw new NotFoundError("There is no formulary under the informed id.");
  }

  if (dbFormulary.status !== FormularyStatus.ON_PROGRESS) {
    throw new InvalidActionError("It is not possible to edit a closed formulary. Please, create another one.");
  }

  if (dbFormulary.userId !== req.decodedJTW.id) {
    throw new InvalidActionError("You're not authorized to update this formulary.");
  }

 

  const dbFormularyAnswers = await req.db.FormularyAnswerRepository.upsertFormularyAnswers(req, formularyAnswerInput);

  return res.status(200).send(dbFormularyAnswers);
}

export async function getFormulariesByUser(req: Request, res: Response) {
  try {
    const dbFormularies = await req.db.FormularyRepository.findBy({ userId: req.decodedJTW.id });

    return res.status(200).send(dbFormularies);
  } catch (error) {
    console.log("Error on Getting Formulary By User: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}

export async function getFormularyInformations(req: Request, res: Response) {
  const { id: formularyId } = req.params;

  const dbFormulary = await req.db.FormularyRepository.get(formularyId);

  if (!dbFormulary) {
    throw new NotFoundError("We couldn't find this formulary.")
  }

  const dbFormularyAnswers = await req
    .knex("formularyAnswers")
    .select(
      "formularyAnswers.id",
      "formularyAnswers.answer",
      "formularyAnswers.activityId",
      "formularyAnswers.fieldId",
      "activities.atividade",
      "activities.pontos",
      "activities.peso",
      "fields.campo",
    )
    .leftJoin("activities", "formularyAnswers.activityId", "activities.id")
    .leftJoin("fields", "formularyAnswers.fieldId", "fields.id")    
    .groupBy("formularyAnswers.id", "fields.campo", "activities.atividade", "activities.pontos", "activities.peso")
    .where("formularyAnswers.formularyId", dbFormulary.id)
    .orderBy("fields.campo")
    .orderBy("activities.atividade");


  const dbFiles = await req
    .knex("formularyAnswers")
    .select(
      "files.formularyAnswerId",
      "formularyAnswers.fieldId",
      "formularyAnswers.activityId",
      "files.id",
      "files.filename",
      "files.content",
    )
    .leftJoin("files", "formularyAnswers.id", "files.formularyAnswerId")
    .leftJoin("activities", "formularyAnswers.activityId", "activities.id")
    .leftJoin("fields", "formularyAnswers.fieldId", "fields.id")    
    .where("formularyAnswers.formularyId", dbFormulary.id)
    .orderBy("fields.campo")
    .orderBy("activities.atividade");

  return res.status(200).send({
    dbFormulary,
    dbFormularyAnswers,
    dbFiles,
  });
}

export async function closeFormulary(req: Request, res: Response) {
  const { id: formularyId } = req.params;

  const dbFormulary = await req.db.FormularyRepository.get(formularyId);

  if (!dbFormulary) {
    throw new NotFoundError("We couldn't find this formulary.")
  }

  if (dbFormulary.userId !== req.decodedJTW.id) {
    throw new InvalidActionError("You're not authorized to close this formulary.");
  }

  const finishedFormulary = await req.db.FormularyRepository.update({
    id: formularyId,
    status: FormularyStatus.DONE,
  });

  return res.status(200).send(finishedFormulary);
}

export async function deleteFormulary(req: Request, res: Response) {
  const { id: formularyId } = req.params;

  const dbFormulary = await req.db.FormularyRepository.get(formularyId);

  if (!dbFormulary) {
    throw new NotFoundError("We couldn't find this formulary.")
  }

  if (dbFormulary.userId !== req.decodedJTW.id) {
    throw new InvalidActionError("You're not authorized to close this formulary.");
  }

  await req.knex("formularyAnswers").delete().where("formularyId", formularyId)

  const finishedFormulary = await req.db.FormularyRepository.delete(formularyId);

  return res.status(200).send(finishedFormulary);
}

export async function deleteFormularyAnswer(req: Request, res: Response) {
  const { formularyId: formularyId, id: formularyAnswerId } = req.params;

  const dbFormulary = await req.db.FormularyRepository.get(formularyId);

  if (!dbFormulary) {
    throw new NotFoundError("We couldn't find this formulary.")
  }

  if (dbFormulary.userId !== req.decodedJTW.id) {
    throw new InvalidActionError("You're not authorized to close this formulary.");
  }

  const dbFormularyAnswers = await req
    .knex("formularyAnswers")
    .select(
      "formularyAnswers.id",
      "formularyAnswers.answer",
      "formularyAnswers.activityId",
      "formularyAnswers.fieldId",
    )
    .where("formularyAnswers.formularyId", dbFormulary.id)

  await req.knex("formularyAnswers").delete().where("id", formularyAnswerId)

  await req.knex("files").delete().where("formularyAnswerId", formularyAnswerId)

  return res.status(200).send(dbFormularyAnswers);
}