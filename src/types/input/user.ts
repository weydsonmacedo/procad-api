import { DBUser } from "../../db";

export type UserInput = Omit<DBUser, "id" | "createdAt" | "updatedAt" | "deletedAt">;
