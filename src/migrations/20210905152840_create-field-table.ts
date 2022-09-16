import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "fields", table => {
    table.text("text").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "fields");
}
