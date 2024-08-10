CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
