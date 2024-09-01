import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: [
      // Souce folder path
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@scenes", replacement: resolve(__dirname, "scenes") },
    ],
  },
});
