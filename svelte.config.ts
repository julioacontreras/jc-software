import autoPreprocess from 'svelte-preprocess';
 import typescript from '@rollup/plugin-typescript';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: autoPreprocess(),
  typescript: typescript({}),
  kit: {
    alias: {
      '@': './src/',
    },  
  },
};

export default config;