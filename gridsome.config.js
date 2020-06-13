module.exports = {
	titleTemplate: 'דורית שכטר - ייעוץ חיתום ותביעות ביטוח חיים, בריאות וסיעוד',
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
	},
	templates: {
		// Add templates for content types here.
		// Read more: https://gridsome.org/docs/templates/
		// Tag: '/tag/:id',
	},
	plugins: [
		{
			use: '@gridsome/source-contentful',
			options: {
				space: 'reqntq6nxb16', // required
				accessToken: 'ijmcFGF6gYieVcXgU49WFcQP3wW-olIgTlLsLlIjCLM', // required
				typeName: 'Contentful',
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				purgeConfig: {
					content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.html', './src/**/*.md'],
					whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded', 'active'],
					defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
				},
			},
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000, // default
			},
		},
	],
}
