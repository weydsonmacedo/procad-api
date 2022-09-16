import Knex from "knex";
import { DBUserDocument } from "../db";
import { Repository } from "./Repository";

export class UserDocumentRepository extends Repository<DBUserDocument> {
  constructor(knex: Knex) {
    super(knex, "userDocuments");
  }
}
