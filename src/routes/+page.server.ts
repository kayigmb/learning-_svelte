import { fail, redirect, type Cookies } from "@sveltejs/kit";
import { z } from "zod";

export async function load({
  fetch,
  cookies,
}: {
  fetch: any;
  cookies: Cookies;
}) {
  const token = cookies.get("userAuth");

  if (!token) {
    redirect(307, "/login");
  }
  const response = await fetch("api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todos = await response.json();
  return {
    info: JSON.parse(token),
    todos: todos.message,
  };
}

const validate = z.object({
  todo: z.string().min(1, { message: "Todos is required" }),
});

export const actions = {
  todo: async ({ request, fetch }: { request: Request; fetch: any }) => {
    const formData: FormData = await request.formData();
    const result = validate.safeParse(Object.fromEntries(formData));
    const todoData = {
      todo: formData.get("todo") ?? "",
    };
    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...todoData,
      });
    }
    const { todo } = result.data;
    await fetch("api/todo", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { success: true };
  },
};
