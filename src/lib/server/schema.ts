import { pgTable, boolean, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  userId: serial("userId").notNull(),
  title: text("title").notNull(),
  description: text("descrption").notNull(),
  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const usersTodosRelations = relations(user, ({ many }) => ({
  todos: many(todos),
}));

export const todoUsersRelations = relations(todos, ({ one }) => ({
  user: one(user, {
    fields: [todos.userId],
    references: [user.id],
  }),
}));
