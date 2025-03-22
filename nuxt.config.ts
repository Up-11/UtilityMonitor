import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'src/',
	modules: [
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'nuxt-typed-router',
		'@nuxt/ui'
	],
	vite: {
		plugins: [tailwindcss()]
	},
	css: ['~/assets/css/main.css'],
	ui: {
		colorMode: false
	}
})
