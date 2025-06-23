import js from '@eslint/js';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import jsx_a11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  // 기본 환경 설정
  {
    ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  // 기본 JavaScript/TypeScript 설정
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React 설정
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsx_a11y,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // JSX a11y 규칙
      'jsx-a11y/alt-text': ['warn', { elements: ['img'] }],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',

      // React 규칙
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/no-array-index-key': 'warn',

      // TypeScript 규칙
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // unused-imports가 처리
    },
  },

  // @tanstack/query 플러그인
  {
    plugins: {
      '@tanstack/query': tanstackQuery,
    },
    rules: tanstackQuery.configs.recommended.rules,
  },

  // import 정렬 규칙
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // unused-imports 플러그인
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // prettier 통합을 위한 설정
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    ...eslintConfigPrettier,
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default eslintConfig;
