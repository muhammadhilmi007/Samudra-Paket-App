/**
 * Lint-staged configuration for Samudra ERP monorepo
 * Following Windsurf Rules for code quality and consistency
 */
module.exports = {
  // JavaScript files (Next.js, Express)
  "apps/web/**/*.{js,jsx}": [
    "prettier --write",
    "eslint --fix",
  ],
  "apps/api/**/*.js": [
    "prettier --write",
    "eslint --fix",
  ],
  // TypeScript files (React Native)
  "apps/mobile/**/*.{ts,tsx}": [
    "prettier --write",
    "eslint --fix",
    () => "pnpm --filter=mobile typecheck", // Run type checking for mobile app
  ],
  // Shared packages
  "packages/**/*.{js,jsx}": [
    "prettier --write",
    "eslint --fix",
  ],
  "packages/**/*.{ts,tsx}": [
    "prettier --write",
    "eslint --fix",
    () => "pnpm turbo run typecheck --filter=./packages/*", // Run type checking for packages
  ],
  // Configuration files
  "*.{json,md,yml,yaml}": [
    "prettier --write",
  ],
};
