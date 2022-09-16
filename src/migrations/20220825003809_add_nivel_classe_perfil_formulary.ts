import * as Knex from "knex";


export async function up(knex: Knex) {
    await knex.schema.alterTable("formularies", table => {
      table.text("levelId").notNullable();
      table.text("classId").notNullable();
      table.text("roleId").notNullable();
    });
  }
  
  export async function down(knex: Knex) {
    await knex.schema.alterTable("formularies", table => {
      table.dropColumn("levelId");
      table.dropColumn("classId");
      table.dropColumn("roleId");
    });
  }
  
