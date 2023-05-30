import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // todo: ssl
  plugins: [
    react(),
    basicSsl(),
    visualizer({
      template: 'treemap',
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/report.html',
    }),
  ],
  server: {
    host: 'frontend',
    port: 8080,
  },
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@guards',
        replacement: path.resolve(__dirname, 'src/components/guards'),
      },
      {
        find: '@hoc',
        replacement: path.resolve(__dirname, 'src/components/hoc'),
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/components/layouts'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, 'src/providers'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, 'src/routes'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@atoms',
        replacement: path.resolve(__dirname, 'src/utils/atoms'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  envDir: '../env/.env',
});
