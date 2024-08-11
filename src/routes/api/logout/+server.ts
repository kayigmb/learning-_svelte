import { redirect } from "@sveltejs/kit";

export async function GET({ cookies }) {
  cookies.delete("userAuth", { path: "/" });
  return { success: true };
}
