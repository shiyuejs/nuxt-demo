
module.exports = {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		// script: [
		// 	{ src: '' }
		// ],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: "text/css", href: '/element-ui/index.css' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		//'element-ui/lib/theme-chalk/index.css'
		// {
		// 	src: '*.scss',
		// 	lang: 'scss'
		// }
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{
			src: '@/plugins/element-ui',
			ssr: true,
		}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
	],
	/*
	** Build configuration
	*/
	build: {
		transpile: [/^element-ui/],
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	},
	vendor: ['element-ui']
}
