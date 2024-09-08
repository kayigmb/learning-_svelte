import { type Cookies } from "@sveltejs/kit";

export async function GET({ cookies }: { cookies: Cookies }) {
  cookies.delete("userAuth", { path: "/" });
  return new Response(JSON.stringify({ message: "Logout Succesfully" }), {
    status: 200,
  });
}
