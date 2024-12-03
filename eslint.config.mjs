import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	{
		ignores: ['**/node_modules/**', '**/dist/**', '.commitlint.config.js']
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	{
		rules: {
			'no-case-declarations': 'off',
			'no-constant-condition': 'off'
		}
	}
];
