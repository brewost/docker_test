import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    watch: {
      usePolling: true // Enable polling for file changes inside Docker (if needed)
    },
    hmr: {
      host: 'localhost',  // Use host machine IP here if not using localhost
      clientPort: 8080          // Same port as the Vite server
    }// Make sure the port matches
  },
});
