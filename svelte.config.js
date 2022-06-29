import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter()
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
};

export default config;
