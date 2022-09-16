import { NextFunction, Request, Response } from "express";
import { JwtError, MissingJwtError } from "../helpers/apiError";
import * as jwt from "jsonwebtoken";
import { env } from "../helpers/env";
import { DecodedJWT } from "../types/config/jwt";

// auth middleware

export async function auth(req: Request, _res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"] ? String(req.headers["x-access-token"]) : null;

  if (!token) {
    throw new MissingJwtError("No token provided.");
  }

  let decodedJWT: DecodedJWT;

  try {
    decodedJWT = jwt.verify(token, env.JWT_SECRET) as unknown as DecodedJWT;
  } catch (error) {
    throw new JwtError("Token error");
  }

  req.decodedJTW = decodedJWT;
  next();
}
