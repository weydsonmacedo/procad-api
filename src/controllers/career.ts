import { Request, Response } from "express";
import { ServerError } from "../helpers/apiError";
import { KnexError } from "../types";

export async function getCareers(req: Request, res: Response) {
  try {
    const dbCareer = await req.db.CareerRepository.findAll();

    return res.status(200).send(dbCareer);
  } catch (error) {
    console.log("Error on Getting Careers: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
