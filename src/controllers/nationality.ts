import { Request, Response } from "express";
import { ServerError } from "../helpers/apiError";
import { KnexError } from "../types";

export async function getNationalities(req: Request, res: Response) {
  try {
    const nationalities = await req.db.CountryRepository.findAll();

    return res.status(200).send(nationalities);
  } catch (error) {
    console.log("Error on Getting Nationalities: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
