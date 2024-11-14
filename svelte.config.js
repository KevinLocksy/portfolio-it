import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/assets',
			$components: 'src/lib/components',
			$config: 'src/config',
			$constants: 'src/lib/constants',
			$store: 'src/lib/store',
			$styles: 'src/assets/styles',
			$utils: 'src/lib/utils'
		}
	},
	paths: {
		base: process.argv.includes('dev') ? '' : '/portfolio-it'
	}
};

export default config;
