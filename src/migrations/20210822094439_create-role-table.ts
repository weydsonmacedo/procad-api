import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";
import { v4 as uuid } from "uuid";

export async function up(knex: Knex) {
  await createTable(knex, "roles", table => {
    table.text("name").notNullable();
  });

  await knex("roles").insert([
    {
      id: uuid(),
      name: "Professor Auxiliar",
    },
    {
      id: uuid(),
      name: "Professor Assistente A",
    },
    {
      id: uuid(),
      name: "Professor Adjunto A",
    },
    {
      id: uuid(),
      name: "Professor Assistente",
    },
    {
      id: uuid(),
      name: "Professor Adjunto",
    },
    {
      id: uuid(),
      name: "Professor Associado",
    },
  ]);
}

export async function down(knex: Knex) {
  await dropTable(knex, "roles");
}
