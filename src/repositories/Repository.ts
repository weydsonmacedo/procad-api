import Knex from "knex";
import { v4 as uuid } from "uuid";
import { Base } from "../db";

export abstract class Repository<T extends Base> {
  constructor(public readonly knex: Knex, public readonly tableName: string) {}

  async insert(
    item: Omit<T, "id" | "createdAt" | "updatedAt" | "deletedAt"> & {
      id?: string;
      createdAt?: Date;
      updatedAt?: Date;
      deletedAt?: Date;
    },
    knex?: Knex,
  ): Promise<T> {
    if (knex === undefined) {
      return this.knex.transaction(async trx => this.insert(item, trx));
    }

    const [result]: T[] = await knex(this.tableName)
      .insert({
        id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        ...item,
      })
      .returning("*");

    return result;
  }

  async findOneBy(
    condition: Partial<T>,
    queryBuilder?: (qb: Knex.QueryBuilder) => Knex.QueryBuilder,
    knex?: Knex,
  ): Promise<T | undefined> {
    if (knex === undefined) {
      return this.knex.transaction(async trx => this.findOneBy(condition, queryBuilder, trx));
    }

    const query = knex(this.tableName)
      .select()
      .whereNull("deletedAt")
      .where({ ...condition })
      .first();

    if (queryBuilder) {
      queryBuilder(query);
    }

    return query;
  }

  async count(condition?: Partial<T>, queryBuilder?: (qb: Knex.QueryBuilder) => void): Promise<number> {
    const query = this.knex(this.tableName)
      .select()
      .whereNull(`${this.tableName}.deletedAt`)
      .where({ ...(condition ?? {}) })
      .count({ count: 1 })
      .first();

    if (queryBuilder) {
      queryBuilder(query);
    }

    return parseInt(((await query)?.count ?? "0").toString(), 10);
  }

  async findAll(): Promise<T[]> {
    return this.knex(this.tableName).select().whereNull("deletedAt");
  }

  async findBy(
    condition: Partial<T>,
    queryBuilder?: (qb: Knex.QueryBuilder) => Knex.QueryBuilder,
    knex = this.knex,
  ): Promise<T[]> {
    const query = knex(this.tableName)
      .select()
      .whereNull(`${this.tableName}.deletedAt`)
      .where({ ...condition });

    if (queryBuilder) {
      queryBuilder(query);
    }

    return query;
  }

  async get(id: string): Promise<T | undefined> {
    return this.findOneBy({ id } as Partial<T>);
  }

  async update(item: Partial<T> & Pick<T, "id">, knex?: Knex): Promise<T> {
    if (knex === undefined) {
      return this.knex.transaction(async trx => this.update(item, trx));
    }

    const now = new Date();

    const current: T | undefined = await knex(this.tableName)
      .select()
      .whereNull("deletedAt")
      .where({ id: item.id })
      .first()
      .forUpdate();

    if (!current) {
      throw new Error("Não encontrado");
    }

    const [updatedItem]: T[] = await knex(this.tableName)
      .whereNull("deletedAt")
      .where({ id: item.id })
      .update({
        ...item,
        updatedAt: now,
      })
      .returning("*");

    return updatedItem;
  }

  async delete(id: string): Promise<T> {
    return this.knex.transaction(async trx => {
      const current: T | undefined = await trx(this.tableName)
        .select()
        .whereNull("deletedAt")
        .where({ id })
        .first()
        .forUpdate();

      if (!current) {
        throw new Error("Não encontrado");
      }

      const now = new Date();
      const [deleted]: Array<T | undefined> = await trx(this.tableName)
        .whereNull("deletedAt")
        .where({ id })
        .update({ updatedAt: now, deletedAt: now })
        .returning("*");

      if (!deleted) {
        throw new Error(`BUG: deleted: ${deleted}`);
      }

      return deleted;
    });
  }
}
