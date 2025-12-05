import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit', 'lit-html', 'lit-element', /^lit\//],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
