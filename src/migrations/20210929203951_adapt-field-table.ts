import * as Knex from "knex";

export async function up(knex: Knex) {
  await knex.schema.alterTable("fields", table => {
    table.renameColumn("text", "campo");
    table.string("observacao").nullable();
  });
}

export async function down(knex: Knex) {
  await knex.schema.alterTable("fields", table => {
    table.renameColumn("campo", "text");
    table.string("observacao").nullable();
  });
}
