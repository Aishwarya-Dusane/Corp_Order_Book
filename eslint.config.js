import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import cypress from "eslint-plugin-cypress";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Ignore the dist folder globally
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended, // Core JavaScript best practices
      tseslint.configs.recommended, // TypeScript-specific linting rules
      reactHooks.configs["recommended-latest"], // Prevent incorrect React Hook usage
      reactRefresh.configs.vite, // Ensures safe usage with Vite's hot reload
    ],
    languageOptions: {
      ecmaVersion: 2020, // Use modern ECMAScript 2020 features
      globals: globals.browser, // Provides browser globals (e.g., window, document)
    },
  },

  {
    files: ["cypress/**/*.ts", "cypress/**/*.js"], // Apply only to Cypress test files
    plugins: { cypress },
    extends: ["plugin:cypress/recommended"], // Enables Cypress rules
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals
        ...globals.mocha, // Adds `describe`, `it`, etc. for Cypress tests
      },
    },
  },
]);
