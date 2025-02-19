module.exports = {
	titleTemplate: 'דורית שכטר - ייעוץ חיתום ותביעות ביטוח חיים, בריאות וסיעוד',
	siteName: 'דורית שכטר - ייעוץ חיתום ותביעות ביטוח חיים, בריאות וסיעוד',
	siteDescription: 'ייעוץ חיתום ותביעות ביטוח חיים, בריאות וסיעוד',
	siteUrl: 'https://doritshechter.co.il',
	icon: './src/assets/images/logo.jpg',
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
	},
	plugins: [
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				purgeConfig: {
					content: ['./src/**/*.vue', './src/**/*.scss', './src/**/*.js', './src/**/*.html', './src/**/*.md'],
					whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded', 'active'],
					defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
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
