import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("users", table => {
    table.date("birthdate").nullable().alter();
    table.integer("workload").nullable().alter();
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("users", table => {
    table.date("birthdate").notNullable().alter();
    table.integer("workload").notNullable().alter();
  });
}
