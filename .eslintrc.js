module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',

  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/no-unresolved': 0,
  },
};
