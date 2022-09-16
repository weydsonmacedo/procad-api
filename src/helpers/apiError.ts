// error definitions

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ServerError extends ApiError {
  constructor(message: string) {
    super(message, 500);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class DuplicatedEntityError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class ValidationError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
export class ExpiredTokenError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class InvalidActionError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class LoginError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class MissingJwtError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ExpiredJwtError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class JwtError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export class ExpiredSessionError extends ApiError {
  constructor(message: string) {
    super(message, 403);
  }
}
