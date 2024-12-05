import { defineConfig } from "drizzle-kit"; 


export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:45CYRNzWklUq@ep-dry-band-a5cl22fl.us-east-2.aws.neon.tech/ContentAlly?sslmode=require",
  },
});
