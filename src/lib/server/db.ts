import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { SECRET_URL } from "$env/static/private";

const database = neon(SECRET_URL!);
export const db = drizzle(database);
