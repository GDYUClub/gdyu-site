import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex'
import sveltePreprocess  from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions:['.svelte','.md'],

	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions:['.md'],
			
		})
	]
};

export default config;
