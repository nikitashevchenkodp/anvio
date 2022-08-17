module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base',],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // indent: ['error', 4],
    // quotes: ['warn', 'single'],
    // 'multiline - ternary': ['error', 'always'],
    'no-return-assign': "error",
  },
};