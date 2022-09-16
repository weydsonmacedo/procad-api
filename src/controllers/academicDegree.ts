import { Request, Response } from "express";
import { ServerError } from "../helpers/apiError";
import { KnexError } from "../types";

export async function getAcademicDegrees(req: Request, res: Response) {
  try {
    const dbAcademicDegree = await req.db.AcademicDegreeRepository.findAll();

    return res.status(200).send(dbAcademicDegree);
  } catch (error) {
    console.log("Error on Getting Academic Degrees: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
