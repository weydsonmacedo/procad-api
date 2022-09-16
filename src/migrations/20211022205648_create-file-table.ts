import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
    await createTable(knex, "files", table => {
        table.string("filename").notNullable();
        table.jsonb("content").notNullable();
        table.uuid("formularyAnswerId").notNullable();
    });
}

export async function down(knex: Knex) {
    await dropTable(knex, "files");
}
