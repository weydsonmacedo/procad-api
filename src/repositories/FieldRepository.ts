import Knex from "knex";
import { DBField } from "../db";
import { Repository } from "./Repository";

export class FieldRepository extends Repository<DBField> {
  constructor(knex: Knex) {
    super(knex, "fields");
  }
}
