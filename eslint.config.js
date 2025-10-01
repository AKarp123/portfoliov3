import eslintPluginAstro from 'eslint-plugin-astro';
import parser from '@typescript-eslint/parser'
import typescript from '@typescript-eslint/eslint-plugin'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
	plugins: {
	  '@typescript-eslint': typescript,
	},
    files: ["**/*.ts"], // only apply typed config to TS
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    // rules...
  }
];