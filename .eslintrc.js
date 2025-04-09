module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      env: {
        browser: true
      }
    },
    {
      files: ['netlify/functions/**/*.js'],
      env: {
        node: true
      }
    }
  ]
} 