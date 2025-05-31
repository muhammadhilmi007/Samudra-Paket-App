module.exports = {
  root: true,
  extends: ['@samudra/eslint-config/node'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // API-specific rules
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'handle-callback-err': 'error',
    'no-process-exit': 'error',
    'node/no-deprecated-api': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
