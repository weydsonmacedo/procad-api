import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "formularies", table => {
    table.uuid("userId").notNullable();
    table.string("type").notNullable();
    table.jsonb("comission").notNullable();
    table.date("from").notNullable();
    table.date("to").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "formularies");
}
