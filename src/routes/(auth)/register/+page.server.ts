import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";

const registerValidation = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z
    .string()
    .email({ message: "Enter a valid email" })
    .min(1, { message: "Email is required" }),
  password: z.string().min(5, {
    message: "Password is required and must be more than 5 characters",
  }),
});

export const actions = {
  register: async ({ request, fetch }) => {
    const formData = await request.formData();
    const result = registerValidation.safeParse(Object.fromEntries(formData));

    const registerData = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
    };

    if (!result.success) {
      return fail(400, {
        error: result.error.format(),
        ...registerData,
      });
    }

    const { name, email, password } = result.data;

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      return fail(400, { ...registerData, failed: errorMessage.message });
    }
    return redirect(307, "/login");
  },
};
