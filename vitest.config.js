import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    globals: true,
    environment: "jsdom",
  },
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
