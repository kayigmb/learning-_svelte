import { fail, redirect } from "@sveltejs/kit";
import type { FetchResult } from "vite/runtime";
import { z } from "zod";

const loginValidation = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const actions = {
  login: async ({ request, fetch }: { request: Request; fetch: any }) => {
    const formData: FormData = await request.formData();
    const result = loginValidation.safeParse(Object.fromEntries(formData));
    const loginData = {
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
    };
    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...loginData,
      });
    }
    const { email, password } = result.data;
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return fail(400, { ...loginData, failed: true });
    }
    return redirect(307, "/");
  },
};
