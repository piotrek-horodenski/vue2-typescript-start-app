module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eslint-disable-next-line': 'off',
    'allow-js': true,
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
