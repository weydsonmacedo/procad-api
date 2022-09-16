import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("activities", table => {
    table.renameColumn("text", "atividade");
    table.renameColumn("points", "pontos");
    table.string("label").notNullable();
    table.float("peso").defaultTo(1).nullable();
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("fields", table => {
    table.renameColumn("atividade", "text");
    table.renameColumn("pontos", "points");
    table.dropColumns("peso", "label");
  });
}
