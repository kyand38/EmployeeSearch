import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './',   // was './env
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      // Ensures the app falls back to `index.html` for unknown routes
      input: 'index.html',
    },
  },
});