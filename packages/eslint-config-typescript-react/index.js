module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    curly: 'error',
    'no-console': 'off',

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
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
