const path = require('path')
const { assert } = require('chai')
const { ESLint } = require('eslint')
const { it } = require('mocha')

const eslint = new ESLint({ overrideConfig: { rules: { '@typescript-eslint/no-unused-vars': 0 } } })

it('OK cases', async () => {
  const results = await eslint.lintFiles(path.resolve(__dirname, 'cases/*/ok.case.tsx'))
  results.forEach((result) => {
    assert.equal(result.errorCount, 0)
    assert.equal(result.warningCount, 0)
  })
})

it('NG cases', async () => {
  const results = await eslint.lintFiles(path.resolve(__dirname, 'cases/*/ng.case.tsx'))
  results.forEach((result) => {
    assert.equal(!!(result.errorCount || result.warningCount), true)
  })
})
