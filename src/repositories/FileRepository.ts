import Knex from "knex";
import { DBFile } from "../db";
import { Repository } from "./Repository";

export class FileRepository extends Repository<DBFile> {
  constructor(knex: Knex) {
    super(knex, "files");
  }
}
