/**
 * ESLint configuration for mobile app
 * Following hexagonal architecture and domain-driven design principles
 */
module.exports = {
  root: true,
  // Use two separate configurations for different file types
  overrides: [
    // Configuration for JavaScript files (including this config file)
    {
      files: ["*.js"],
      extends: ["eslint:recommended"],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
      },
      env: {
        node: true
      }
    },
    // Configuration for TypeScript files
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@samudra/eslint-config/react-native"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json"
      },
      rules: {
        // Project-specific overrides for development phase
        "react-native/no-color-literals": "warn", // Allow color literals during initial development
        "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error during initial development
        "@typescript-eslint/no-unsafe-assignment": "warn", // Warn instead of error during initial development
        "@typescript-eslint/no-unsafe-member-access": "warn", // Warn instead of error during initial development
        "@typescript-eslint/explicit-module-boundary-types": "warn", // Warn instead of error during initial development
        // Disable missing react-native rules temporarily
        "react-native/accessibility-label": "off",
        // Fix import order issues
        "import/order": ["error", {
          "groups": [
            "external",
            "builtin",
            "internal",
            "sibling",
            "parent",
            "index"
          ],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }]
      }
    }
  ]
};
