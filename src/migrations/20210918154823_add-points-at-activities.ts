import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("activities", table => {
    table.integer("points").notNullable();
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("activities", table => {
    table.dropColumn("points");
  });
}
