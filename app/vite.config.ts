import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // todo: ssl
  plugins: [react()], // basicSsl()
  server: {
    https: false,
    host: 'frontend',
    port: 8080,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  envDir: '../env/.env',
});
