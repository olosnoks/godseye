import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';
import tailwindcss from '@tailwindcss/vite';
import { godseyeBackendPlugin } from './server/vitePlugin.mjs';

// GitHub Pages serves project sites from /<repo-name>/. Set VITE_BASE_PATH
// (e.g. "/godseye/") at build time; defaults to "/" for Firebase/local use.
const base = process.env.VITE_BASE_PATH || '/godseye/';

export default defineConfig({
  base,
  plugins: [
    godseyeBackendPlugin(),
    react(),
    cesium(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 4000,
  },
});
