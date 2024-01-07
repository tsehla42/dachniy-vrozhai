module.export = {
  env: {
    'browser': true,
    'es2024': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'no-debugger': 0,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
};
