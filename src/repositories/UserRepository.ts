import Knex from "knex";
import { DBUser } from "../db";
import { Repository } from "./Repository";

export class UserRepository extends Repository<DBUser> {
  constructor(knex: Knex) {
    super(knex, "users");
  }
}
