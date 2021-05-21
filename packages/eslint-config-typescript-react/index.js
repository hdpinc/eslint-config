module.exports = {
  extends: ['@jmdc/eslint-config-typescript', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
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
