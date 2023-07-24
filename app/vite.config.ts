import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // todo: ssl
  plugins: [react(), basicSsl(), svgr()],
  server: {
    host: 'frontend',
    port: 8080,
  },
  preview: {
    host: 'localhost',
    port: 8080,
  },
  resolve: {
    alias: [
      {
        find: '@core',
        replacement: path.resolve(__dirname, 'src/@core'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/@shared'),
      },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  envDir: './env',
});
