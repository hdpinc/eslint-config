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
    curly: 'error',
    'no-console': 'off',
    'no-extra-semi': 'off',

    // TS で interface を export すると no-undef エラーが出る
    // https://github.com/eslint/typescript-eslint-parser/issues/437
    'no-undef': 'off',
    'no-unused-vars': 'off',

    // enum や namespace みたいな TS 独自構文は使わない
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
      {
        selector: 'TSModuleDeclaration',
        message: "Don't declare module or namespace",
      },
    ],
    'one-var': ['error', 'never'],
  },
}
