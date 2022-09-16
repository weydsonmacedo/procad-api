import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "userDocuments", table => {
    table.text("type").notNullable();
    table.text("value").notNullable();
    table.text("issuer").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "userDocuments");
}
