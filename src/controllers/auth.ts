import { CivilStatus } from './../types/enums/profile';
import { Request, Response } from "express";
import { LoginError } from "../helpers/apiError";
import jwt from "jsonwebtoken";
import { env } from "../helpers/env";
import { StatusCodes } from "../helpers/statusCode";
import { comparePassword } from "../helpers/auth";

export async function login(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  //validar input
  const dbUser = await req.db.UserRepository.findOneBy({ email });

  if (!dbUser) {
    throw new LoginError("User or password does not exist.");
  }

  if (comparePassword(password, dbUser.password)) {
    const token = jwt.sign({ id: dbUser.id }, env.JWT_SECRET, { expiresIn: "1hr" });

    return res.status(StatusCodes.OKAY).send({
      token: token,
      userId: dbUser.id,
      siape: dbUser.siape,
      firstName: dbUser.firstName,
      lastName: dbUser.lastName      
    });
  }

  throw new LoginError("User or password does not exist.");
}
