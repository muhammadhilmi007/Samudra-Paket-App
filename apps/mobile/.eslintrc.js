module.exports = {
  root: true,
  extends: ["@samudra/eslint-config/react-native"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // Project-specific overrides
    "react-native/no-color-literals": "warn", // Allow color literals during initial development
    "@typescript-eslint/no-explicit-any": "warn", // Warn instead of error during initial development
  },
};
