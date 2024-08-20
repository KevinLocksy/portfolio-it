import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias:{
			$assets:'src/assets',
			$components:'src/lib/components',
			$config:'src/config',
			$constants:'src/lib/constants',
			$store:'src/lib/store',
			$styles:'src/assets/styles',
			$utils:'src/lib/utils',
		},
	},
	paths: {
		base: process.argv.includes('dev') ? '' : '/portfolio-it',
	}
};

export default config;
