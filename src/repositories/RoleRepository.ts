import Knex from "knex";
import { DBRole } from "../db";
import { Repository } from "./Repository";

export class RoleRepository extends Repository<DBRole> {
  constructor(knex: Knex) {
    super(knex, "roles");
  }
}
