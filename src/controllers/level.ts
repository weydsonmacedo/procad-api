import { Request, Response } from "express";
import { ServerError } from "../helpers/apiError";
import { KnexError } from "../types";

export async function getLevels(req: Request, res: Response) {
  try {
    const dbLevels = await req.db.LevelRepository.findAll();

    return res.status(200).send(dbLevels);
  } catch (error) {
    console.log("Error on Getting Levels: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
