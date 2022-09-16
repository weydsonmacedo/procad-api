import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "users", table => {
    table.date("birthdate").notNullable();
    table.integer("workload").notNullable();
    table.text("academicDegreeId").notNullable();
    table.text("careerId").notNullable();
    table.text("civilStatus").notNullable().defaultTo("Single");
    table.text("email").unique().notNullable();
    table.text("firstName").notNullable();
    table.text("lastName").notNullable();    
    table.text("nationalityId").notNullable().defaultTo("BRA");
    table.text("naturalidade").nullable();
    table.text("password").notNullable();
    table.text("siape").unique().notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "users");
}
