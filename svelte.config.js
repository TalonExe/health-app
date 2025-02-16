import adapter from '@sveltejs/adapter-vercel';

import { preprocessMeltUI, sequence } from '@melt-ui/pp'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        alias:{
            $lib: './src/lib',
            "@/*": "./src/lib/*",
        }
	},
preprocess: sequence([
    // ... other preprocessors
    preprocessMeltUI() // add to the end!
  ])
};

export default config;
