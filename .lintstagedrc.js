module.exports = {
  '**/!(*case).{js,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{md,yml,json}': ['prettier --write'],
}
