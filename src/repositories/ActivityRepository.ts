import Knex from "knex";
import { DBActivity } from "../db";
import { Repository } from "./Repository";

export class ActivityRepository extends Repository<DBActivity> {
  constructor(knex: Knex) {
    super(knex, "activities");
  }
}
