import { Request, Response } from "express";
import { DuplicatedEntityError, NotFoundError, ValidationError } from "../helpers/apiError";
import { ActivityInput } from "../types";
import { activityValidator } from "../validators";

export async function createActivity(req: Request, res: Response) {
  const activityInput: ActivityInput = req.body;

  const { error } = activityValidator.validate(activityInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbField = await req.db.FieldRepository.get(activityInput.fieldId);

  if (!dbField) {
    throw new NotFoundError("It was not possible to find the required field");
  }

  const dbActivity = await req.db.ActivityRepository.findOneBy({
    atividade: activityInput.atividade,
    fieldId: activityInput.fieldId,
  });

  if (dbActivity) {
    throw new DuplicatedEntityError("There is already an activity with its name in this field");
  }

  const newActivity = await req.db.ActivityRepository.insert(activityInput);

  return res.status(200).send(newActivity);

}

export async function getActivitiesFromField(req: Request, res: Response) {
  const { id: fieldId } = req.params;

  const dbField = await req.db.FieldRepository.get(fieldId);

  if (!dbField) {
    throw new NotFoundError("It was not possible to find the required field");
  }

  const dbActivities = await req.db.ActivityRepository.findBy({ fieldId });

  return res.status(200).send(dbActivities);
}
