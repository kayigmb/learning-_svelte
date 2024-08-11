import { db } from "$lib/server/db";
import { todos } from "$lib/server/schema";
import { eq, sql } from "drizzle-orm";

export async function POST({ request, cookies }) {
  const { todo } = await request.json();
  const user = await JSON.parse(cookies.get("userAuth"));
  const response = await db.insert(todos).values({ userId: user.id, todo });
  return new Response(JSON.stringify({ message: "succesfully done" }), {
    status: 200,
  });
}

export async function DELETE({ request, cookies }) {
  const { todoId } = await request.json();
  const response = await db.delete(todos).where(eq(todos.id, todoId));
  return new Response(JSON.stringify({ message: "Todo delete" }), {
    status: 200,
  });
}

export async function PATCH({ request, cookies }) {
  const { todoId } = await request.json();
  const response = await db
    .update(todos)
    .set({ completed: sql`NOT ${todos.completed}` })
    .where(eq(todos.id, todoId));
  return new Response(JSON.stringify({ message: "Todo updated" }), {
    status: 200,
  });
}

export async function GET({ request, cookies }) {
  const user = await JSON.parse(cookies.get("userAuth"));
  const response = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, user.id));
  return new Response(JSON.stringify({ message: response }), {
    status: 200,
  });
}
