module.exports = {
  extends: ['./react.js', './typescript.js', 'plugin:react-native/all', 'prettier'],
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    // React Native specific rules
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': ['error', { skip: ['Button', 'Text'] }],
    'react-native/no-single-element-style-arrays': 'error',

    // Accessibility rules for React Native
    'react-native/accessibility-label': 'error',

    // Offline-first approach rules
    'no-restricted-globals': ['error', 'navigator', 'fetch'],

    // Performance rules
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

    // TypeScript specific overrides for React Native
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
