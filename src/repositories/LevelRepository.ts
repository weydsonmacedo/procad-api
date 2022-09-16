import Knex from "knex";
import { DBLevel } from "../db";
import { Repository } from "./Repository";

export class LevelRepository extends Repository<DBLevel> {
  constructor(knex: Knex) {
    super(knex, "levels");
  }
}
