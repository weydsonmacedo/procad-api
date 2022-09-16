import { DBUser } from "../../db";

export type ProfileInput = Omit<DBUser, "id" | "createdAt" | "updatedAt" | "deletedAt" | "email" | "password">;
