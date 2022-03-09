module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      'version': 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'google'
  ],
  rules: {
    'semi': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'require-jsdoc': 'off',
    'eol-last': 'error',
    'no-dupe-keys': 'off',
    'object-curly-spacing': ['error', 'always'],
    'new-cap': 0,
    'no-unused-vars': 'off'
  }
}
