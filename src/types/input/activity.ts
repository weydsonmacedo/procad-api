import { DBActivity } from "../../db";

export type ActivityInput = Omit<DBActivity, "id" | "createdAt" | "updatedAt" | "deletedAt">;