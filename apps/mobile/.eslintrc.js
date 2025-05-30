module.exports = {
  root: true,
  extends: ["@samudra/eslint-config/react"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // Mobile-specific rules
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
  },
};
