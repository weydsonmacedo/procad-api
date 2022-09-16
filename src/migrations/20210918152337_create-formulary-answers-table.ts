import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "formularyAnswers", table => {
    table.uuid("formularyId").notNullable();
    table.uuid("fieldId").notNullable();
    table.uuid("activityId").notNullable();
    table.jsonb("answer").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "formularyAnswers");
}
