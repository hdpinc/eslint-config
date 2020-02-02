module.exports = {
  '**/*.{js,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.{md,yml,json}': ['prettier --write'],
}
