import { DBUser } from "../../db";

export type ProfileInput = Omit<DBUser, "createdAt" | "updatedAt" | "deletedAt" | "email" | "password">;
