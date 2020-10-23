const path = require('path')
const { it, expect } = require('@jest/globals')
const { ESLint } = require('eslint')

const eslint = new ESLint({ overrideConfig: { rules: { '@typescript-eslint/no-unused-vars': 0 } } })

it('OK cases', async () => {
  const results = await eslint.lintFiles(path.resolve(__dirname, 'cases/*/ok.case.ts'))
  results.forEach((result) => {
    expect(result.errorCount).toBe(0)
    expect(result.warningCount).toBe(0)
  })
})

it('NG cases', async () => {
  const results = await eslint.lintFiles(path.resolve(__dirname, 'cases/*/ng.case.ts'))
  results.forEach((result) => {
    expect(!!(result.errorCount || result.warningCount)).toBe(true)
  })
})
