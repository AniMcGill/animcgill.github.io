import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), preact({ compat: true })],
  site: 'https://msac.ssmu.ca',
  build: {
    format: 'file',
  },
});
