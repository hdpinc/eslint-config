module.exports = {
  extends: 'semantic-release-monorepo',
  plugins: [
    [
      '@semantic-release/changelog',
      '@semantic-release/github',
      {
        successComment: false,
      },
    ],
  ],
}
