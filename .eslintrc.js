module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		// '@vue/typescript/recommended',
		"@vue/prettier",
		// '@vue/prettier/@typescript-eslint',
		// "plugin:jest-dom/recommended",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	// plugins: ["jest-dom"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"prettier/prettier": [
			"warn",
			{
				singleQuote: true,
				semi: false,
				trailingComma: "all",
				useTabs: true,
				tabWidth: 4,
				printWidth: 120,
				endOfLine: "lf",
			},
		],
		// '@typescript-eslint/ban-ts-ignore': 'off',
	},
	// overrides: [
	// 	{
	// 		files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
	// 		env: {
	// 			jest: true,
	// 		},
	// 	},
	// ],
};
