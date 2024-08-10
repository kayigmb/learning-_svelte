ALTER TABLE "todos" RENAME COLUMN "title" TO "todo";--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN IF EXISTS "descrption";