import { passwordCompare } from "$lib/helper/encrypt";
import { db } from "$lib/server/db";
import { user } from "$lib/server/schema";
import { eq } from "drizzle-orm";

export async function POST({ request, cookies }) {
  const { email, password } = await request.json();
  const data = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);
  if (data.length == 0) {
    return new Response(JSON.stringify({ message: "Email not found" }), {
      status: 404,
    });
  }
  const compared = await passwordCompare(password, data[0].password);
  if (!compared) {
    return new Response(JSON.stringify({ message: "Wrong Password" }), {
      status: 403,
    });
  }
  cookies.set("userAuth", JSON.stringify(data[0]), {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return new Response(JSON.stringify({ message: "Successful sign In" }), {
    status: 200,
  });
}
