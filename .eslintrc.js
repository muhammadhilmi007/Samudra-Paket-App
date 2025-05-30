/**
 * Root ESLint configuration for Samudra ERP monorepo
 * Following Windsurf Rules for code quality and consistency
 */
module.exports = {
  root: true,
  // This configuration will be extended by each package
  extends: [
    "@samudra/eslint-config/base",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "build",
    ".next",
    "coverage",
    "public",
  ],
  rules: {
    // Global rules that apply to all files
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
  },
  overrides: [
    // JavaScript files
    {
      files: ["**/*.js", "**/*.jsx"],
      extends: ["@samudra/eslint-config/base"],
    },
    // TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["@samudra/eslint-config/typescript"],
    },
    // React files
    {
      files: ["**/*.jsx", "**/*.tsx"],
      extends: ["@samudra/eslint-config/react"],
    },
    // Next.js files
    {
      files: ["apps/web/**/*.js", "apps/web/**/*.jsx", "apps/web/**/*.ts", "apps/web/**/*.tsx"],
      extends: ["@samudra/eslint-config/nextjs"],
    },
    // React Native files
    {
      files: ["apps/mobile/**/*.js", "apps/mobile/**/*.jsx", "apps/mobile/**/*.ts", "apps/mobile/**/*.tsx"],
      extends: ["@samudra/eslint-config/react-native"],
    },
    // Node.js files
    {
      files: ["apps/api/**/*.js"],
      extends: ["@samudra/eslint-config/node"],
    },
  ],
};
