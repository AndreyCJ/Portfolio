import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import Components from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import WindiCSS from 'vite-plugin-windicss';
import PostcssNested from 'postcss-nested';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),
    Components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
  ],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [PostcssNested()],
    },
  },
});
