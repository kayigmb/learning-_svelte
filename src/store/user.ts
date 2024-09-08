import type { Cookies } from "@sveltejs/kit";
import { writable } from "svelte/store";

export const userData = writable([]);

export const getData = async ({ cookies }: { cookies: Cookies }) => {
  const token = cookies.get("userAuth");
  let data = await JSON.parse(token!);
  userData.set(data);
};
