import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";
import { v4 as uuid } from "uuid";

export async function up(knex: Knex) {
  await createTable(knex, "careers", table => {
    table.text("name").notNullable();
  });

  await knex("careers").insert([
    {
      id: uuid(),
      name: "Magistério Superior",
    },
    {
      id: uuid(),
      name: "Ensino Básico",
    },
    {
      id: uuid(),
      name: "Técnico",
    },
    {
      id: uuid(),
      name: "Tecnológico",
    },
  ]);
}

export async function down(knex: Knex) {
  await dropTable(knex, "careers");
}
