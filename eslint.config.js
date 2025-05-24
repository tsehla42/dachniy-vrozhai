import vueEslintParser from 'vue-eslint-parser';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-debugger': 0,
  },
});
