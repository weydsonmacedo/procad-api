import Knex from "knex";
import { DBFormulary } from "../db";
import { Repository } from "./Repository";

export class FormularyRepository extends Repository<DBFormulary> {
  constructor(knex: Knex) {
    super(knex, "formularies");
  }
}
