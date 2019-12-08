
module.exports = {
	mode: 'universal',
	/*
	** 页面头信息
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'description-defalut' }
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
	** 自定义加载条的样式
	*/
	loading: { 
		color: '#fff',
		height: '4px' 
	},
	/*
	** 全局 CSS
	*/
	css: [
		//'element-ui/lib/theme-chalk/index.css'
		// {
		// 	src: '*.scss',
		// 	lang: 'scss'
		// }
	],
	/*
	** 在安装app之前，加载插件
	*/
	plugins: [
		{
			src: '@/plugins/element-ui',
			ssr: true,
		},
		{ 
			src: "~plugins/axios/client/install", 
			ssr: false 
		}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/axios'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
	],
	/** 
	* Build configuration
	* https://zh.nuxtjs.org/api/configuration-build/
	*/
	build: {
		analyze: false,

		// .nuxt/dist/client/** 文件上传到cdn目录
		publicPath: 'https://cvp-1258030994.file.myqcloud.com/nuxt-demo/',
		filenames: {
			chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
		},
		transpile: [/^element-ui/],
		build: {
			vendor: ['element-ui', 'axios']
		},
		babel: {

		},
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	},
	// vendor: [
	// 	'element-ui',
	// 	'axios'
	// ]
}
