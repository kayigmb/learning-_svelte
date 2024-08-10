CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"title" text NOT NULL,
	"descrption" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL;