import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // todo: ssl
  plugins: [react(), basicSsl()],
  server: {
    port: 8080,
    host: 'frontend',
  },
});
