import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("activities", table => {
    table.float("pontos").alter();
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("activities", table => {
    table.integer("pontos").alter();
  });
}
