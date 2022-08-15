module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-var-requires': 0,
        'no-debugger': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    project: ['./tsconfig.json']
  },
  parser: '',
  plugins: [
    'react'
  ],
  rules: {}
}
