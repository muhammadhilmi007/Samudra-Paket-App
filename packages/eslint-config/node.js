module.exports = {
  extends: [
    "./base.js",
    "prettier",
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Node.js specific rules
    "no-process-exit": "error",
    "node/no-deprecated-api": "error",
    "node/no-missing-import": "off", // Conflicts with module resolution
    "node/no-unpublished-import": "off", // Too restrictive for development
    
    // Error handling
    "no-throw-literal": "error", // Only throw Error objects
    "handle-callback-err": "error", // Enforce error handling in callbacks
    
    // Security best practices
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node"],
    },
  },
};
