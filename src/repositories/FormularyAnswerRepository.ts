import { Request } from "express";
import * as Knex from "knex";
import { DBFormularyAnswer } from "../db";
import { NotFoundError } from "../helpers/apiError";
import { FormularyAnswerInput, File } from "../types";
import { Repository } from "./Repository";

export class FormularyAnswerRepository extends Repository<DBFormularyAnswer> {
  constructor(knex: Knex) {
    super(knex, "formularyAnswers");
  }

  async upsertFormularyAnswers(req: Request, formularyAnswerInput: FormularyAnswerInput) {
    const result = await req.knex.transaction(async trx => {
      const dbFormularyAnswer = formularyAnswerInput.id ? await this.findOneBy({ id: formularyAnswerInput.id }, trx) : undefined;

      const dbActivity = await req.db.ActivityRepository.findOneBy({ id: formularyAnswerInput.activityId, fieldId: formularyAnswerInput.fieldId }, trx);

      if (!dbActivity) {
        throw new NotFoundError("We weren't able to find some field or activity.");
      }

      //const file = formularyAnswerInput.file;
      const files = formularyAnswerInput.files;

      // if its an update
      if (dbFormularyAnswer) {
        
        await req.knex("files").delete().where("formularyAnswerId", dbFormularyAnswer.id)

        if (!!files.length) {

          var arrayLength = files.length;

          for (var i = 0; i < arrayLength; i++) {
            //const dbFile = await req.db.FileRepository.findOneBy({ id: files[i].id });

            //if (!dbFile) {
              await req.db.FileRepository.insert({
                content: JSON.stringify(files[i].content),
                filename: files[i].filename,
                formularyAnswerId: dbFormularyAnswer.id,
              },
                trx
              );
            /*} else {
              await req.db.FileRepository.update({
                content: JSON.stringify(files[i].content),
                filename: files[i].filename,
                id: dbFile.id,
              },
                trx
              );
            }*/
          }          
        };

        return this.update({
          id: dbFormularyAnswer.id,
          formularyId: formularyAnswerInput.formularyId,
          fieldId: formularyAnswerInput.fieldId,
          activityId: formularyAnswerInput.activityId,
          answer: JSON.stringify(formularyAnswerInput.answers),
        },
          trx,
        );
      }

      // if its not an update then insert
      const insertedFormularyAnswer = await this.insert(
        {
          formularyId: formularyAnswerInput.formularyId,
          fieldId: formularyAnswerInput.fieldId,
          activityId: formularyAnswerInput.activityId,
          answer: JSON.stringify(formularyAnswerInput.answers),
        },
        trx,
      );

      if (files) {
        var arrayLength = files.length;
        for (var i = 0; i < arrayLength; i++) {
          await req.db.FileRepository.insert({
            filename: files[i].filename,
            content: JSON.stringify(files[i].content),
            formularyAnswerId: insertedFormularyAnswer.id,
          },
            trx
          );
        }
      }

      /*if (file) {
        await req.db.FileRepository.insert({
          filename: file.filename,
          content: JSON.stringify(file.content),
          formularyAnswerId: insertedFormularyAnswer.id,
        },
          trx
        );
      }*/

      return insertedFormularyAnswer;
    });

    return result;
  }
}
