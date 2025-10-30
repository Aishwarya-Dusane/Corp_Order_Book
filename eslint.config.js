import js from "@eslint/js"; // Imports ESLint’s built-in JavaScript rules and presets.
import tseslint from "typescript-eslint"; // Imports TypeScript-specific ESLint rules and parser.
import react from "eslint-plugin-react"; // Imports React linting rules for JSX and components.
import cypress from "eslint-plugin-cypress"; // Imports Cypress plugin for end-to-end test linting.

export default [
  {ignores: ["dist/**", "node_modules/**"]},// Ignores build and dependency directories.
  js.configs.recommended, // Adds recommended JavaScript linting configurations.
  ...tseslint.configs.recommended, // Adds recommended TypeScript linting configurations.
  {
    plugins: {
      react, // Registers React plugin for JSX rule checks.
      cypress, // Registers Cypress plugin for test file rules.
    },
    files: ["**/*.{js,jsx,ts,tsx}"], // Applies to all JavaScript and TypeScript source files.
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enables JSX syntax parsing for React files.
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disables the old rule requiring React to be imported in JSX.
    },
  },
  {
    files: ["cypress/**/*.ts", "cypress/**/*.js"], // Targets only Cypress test files.
    ...cypress.configs.recommended, // Applies Cypress-specific recommended linting rules.
  },
];
