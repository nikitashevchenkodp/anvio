module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-shadow": ["warn", { hoist: "never" }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
