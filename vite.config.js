import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Project Pages: https://vinhelysia.github.io/introducing/
  base: "/introducing/",
  plugins: [react(), tailwindcss()],
});
