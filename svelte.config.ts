import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: autoPreprocess(),
  typescript: typescript({}),
  kit: {
    adapter: adapter(),
    alias: {
      '@': './src/',
    },  
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    }    
  },
};

export default config;