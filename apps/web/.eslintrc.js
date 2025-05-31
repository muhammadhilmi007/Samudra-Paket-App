module.exports = {
  root: true,
  extends: ['@samudra/eslint-config/nextjs', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'handle-callback-err': 'error',
    'no-process-exit': 'error',
    'node/no-deprecated-api': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
