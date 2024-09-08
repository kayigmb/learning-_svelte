import { db } from "$lib/server/db";
import { todos } from "$lib/server/schema";
import type { Cookies } from "@sveltejs/kit";
import { desc, eq, sql } from "drizzle-orm";

export async function POST({
  request,
  cookies,
}: {
  request: Request;
  cookies: Cookies;
}) {
  const { todo } = await request.json();
  const user = await JSON.parse(cookies.get("userAuth") || "");
  await db.insert(todos).values({ userId: user.id, todo });
  return new Response(JSON.stringify({ message: "succesfully done" }), {
    status: 200,
  });
}

export async function DELETE({ request }: { request: Request }) {
  const { todoId } = await request.json();
  await db.delete(todos).where(eq(todos.id, todoId));
  return new Response(JSON.stringify({ message: "Todo delete" }), {
    status: 200,
  });
}

export async function PATCH({ request }: { request: Request }) {
  const { todoId } = await request.json();
  await db
    .update(todos)
    .set({ completed: sql`NOT ${todos.completed}` })
    .where(eq(todos.id, todoId));
  return new Response(JSON.stringify({ message: "Todo updated" }), {
    status: 200,
  });
}

export async function GET({ cookies }: { cookies: Cookies }) {
  const user = await JSON.parse(cookies.get("userAuth") || "");
  const response = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, user.id))
    .orderBy(desc(todos.createdAt));
  return new Response(JSON.stringify({ message: response }), {
    status: 200,
  });
}
