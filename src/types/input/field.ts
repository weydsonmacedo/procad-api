import { DBField } from "../../db";

export type FieldInput = Omit<DBField, "id" | "createdAt" | "updatedAt" | "deletedAt">;
