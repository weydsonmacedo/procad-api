import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("formularies", table => {
    table.string("status").notNullable().defaultTo("Em andamento");
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("formularies", table => {
    table.dropColumns("status");
  });
}
