import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "activities", table => {
    table.text("text").notNullable();
    table.text("fieldId").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "activities");
}
