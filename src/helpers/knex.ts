import Knex from "knex";
import { env } from "./env";

// knex helpers functions

export const instances: Knex[] = [];

export async function createTable(
  knex: Knex,
  tableName: string,
  tableBuilder: (table: Knex.CreateTableBuilder) => void,
  idColumnType: "text" | "uuid" = "uuid",
) {
  await knex.schema.createTable(tableName, table => {
    table[idColumnType]("id").primary();
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("deletedAt").defaultTo(null);
    tableBuilder(table);
  });
}

export async function dropTable(knex: Knex, tableName: string) {
  await knex.schema.dropTable(tableName);
}

export function getKnexInstance(databaseName?: string) {
  const instance = Knex({
    client: "pg",
    connection: {
      database: databaseName ?? env.DB_DATABASE,
      host: env.DB_HOST,
      password: env.DB_PASSWORD,
      port: parseInt(env.DB_PORT || "5432", 10),
      user: env.DB_USERNAME,
    },
    migrations: {
      directory: "src/migrations",
      extension: "ts",
    },
  });

  instances.push(instance);

  return instance;
}
