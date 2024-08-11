import { db } from "./db";
import { user } from "./schema";

export type InsertUser = typeof user.$inferInsert;
export type GetUser = typeof user.$inferSelect;

export const createUser = async (data: InsertUser) => {
  return await db.insert(user).values(data);
};
