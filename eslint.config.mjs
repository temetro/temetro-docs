import { defineConfig } from "eslint/config";
import nextConfig from "../../packages/config/eslint/next.mjs";

export default defineConfig([
  ...nextConfig,
  {
    settings: {
      next: {
        rootDir: "."
      }
    }
  }
]);
