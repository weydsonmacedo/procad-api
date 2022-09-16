declare namespace Express {
  interface Request {
    knex: import("knex");
    db: import("./types/config/repositories").Repositories;
    decodedJTW: import("./types/config/jwt").DecodedJWT;
  }
}
