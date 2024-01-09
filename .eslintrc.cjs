module.export = {
  root: true,
  env: {
    browser: true,
    'es2024': true,
    node: true,
  },
  extends: [
    '@nuxt/eslint-config-typescript'
  ],
  // plugins: [
  //   'vue',
  //   '@typescript-eslint',
  // ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'no-debugger': 0,
  },
};
