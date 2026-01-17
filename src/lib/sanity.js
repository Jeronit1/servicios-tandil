import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 1. Conectamos con Sanity
export const client = createClient({
  projectId: 'rxeodr9d', // <--- ¡IMPORTANTE! Pega aquí el mismo ID que pusiste en astro.config.mjs
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// 2. Configuramos el constructor de imágenes
const builder = imageUrlBuilder(client);

// 3. Esta es la función mágica que usaremos en los componentes
export function urlFor(source) {
  return builder.image(source);
}