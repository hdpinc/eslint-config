module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',

    // TS で interface を export すると no-undef エラーが出る
    // https://github.com/eslint/typescript-eslint-parser/issues/437
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'one-var': ['error', 'never'],
  },
}
