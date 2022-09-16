import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";
import { v4 as uuid } from "uuid";

export async function up(knex: Knex) {
  await createTable(knex, "levels", table => {
    table.text("name").notNullable();
  });

  await knex("levels").insert([
    {
      id: uuid(),
      name: "A",
    },
    {
      id: uuid(),
      name: "B",
    },
    {
      id: uuid(),
      name: "C",
    },
    {
      id: uuid(),
      name: "D",
    },
    {
      id: uuid(),
      name: "E",
    },
  ]);
}

export async function down(knex: Knex) {
  await dropTable(knex, "levels");
}
