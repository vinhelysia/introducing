import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Custom domain: https://vinhelysia.io.vn
  base: "/",
  plugins: [react(), tailwindcss()],
});
