import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsEslint.parsers['@typescript-eslint/parser'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', resolve(__dirname, 'src')]],
          extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        },
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;