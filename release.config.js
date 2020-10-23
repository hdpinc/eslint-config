module.exports = {
  extends: 'semantic-release-monorepo',
  plugins: [
    [
      '@semantic-release/github',
      {
        successComment: false,
      },
    ],
  ],
}
