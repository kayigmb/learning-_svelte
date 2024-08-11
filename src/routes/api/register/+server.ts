import { hashPassword } from "$lib/helper/encrypt";
import { db } from "$lib/server/db";
import { user } from "$lib/server/schema";
import { eq } from "drizzle-orm";

export const POST = async ({ request }) => {
  const { name,email, password } = await request.json();

  const data = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  if (data.length >= 1) {
    return new Response(JSON.stringify({ message: "Email already exists" }), {
      status: 409,
    });
  }
  const hashedPassword = await hashPassword(password);
  const userCreate = await db
    .insert(user)
    .values({name, email, password: hashedPassword });
  return new Response(JSON.stringify({ message: "Successfully signed up" }), {
    status: 200,
  });
};
