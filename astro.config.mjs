// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "rxeodr9d", // <--- Pega el código que copiaste (ej: 'k4x5z9...')
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-05-03',
  })]
});