import { NextFunction, Request, Response } from "express";
import { ApiError, NotFoundError } from "../helpers/apiError";
import { isPrd } from "../helpers/env";
import { formatDevError, formatErrorProd } from "../helpers/error";

// error handling middleware

export function globalErrorHandler(
  error: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = error.statusCode ?? 500;

  if (isPrd) {
    return res.status(statusCode).json(formatErrorProd(error));
  }

  return res.status(statusCode).json(formatDevError(error));
}

// route not found middleware

export function urlNotFoundHandler(req: Request, _res: Response) {
  throw new NotFoundError(`Can't find ${req.url} on this server`);
}
