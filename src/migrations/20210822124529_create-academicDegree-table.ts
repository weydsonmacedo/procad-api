import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";
import { v4 as uuid } from "uuid";

export async function up(knex: Knex) {
  await createTable(knex, "academicDegrees", table => {
    table.text("name").notNullable();
  });

  await knex("academicDegrees").insert([
    {
      id: uuid(),
      name: "Mestre",
    },
    {
      id: uuid(),
      name: "Doutor",
    },
    {
      id: uuid(),
      name: "Pós-Doutor",
    },
  ]);
}

export async function down(knex: Knex) {
  await dropTable(knex, "academicDegrees");
}
