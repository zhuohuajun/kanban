import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          yjyj: path.resolve(__dirname, 'yjyj.html'),
          zxpj: path.resolve(__dirname, 'zxpj.html'),
          ydyy: path.resolve(__dirname, 'ydyy.html'),
          bzyx: path.resolve(__dirname, 'bzyx.html'),
          zzgl: path.resolve(__dirname, 'zzgl.html'),
          jcgk: path.resolve(__dirname, 'jcgk.html'),
          rwxt: path.resolve(__dirname, 'rwxt.html'),
        },
      },
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
