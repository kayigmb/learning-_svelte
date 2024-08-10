import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  cookies.set("hello", "true", { path: "/" });
  const token = cookies.get("hello");
  if (!token) {
    throw redirect(308, "/login");
  }
}
