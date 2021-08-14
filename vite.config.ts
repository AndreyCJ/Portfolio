import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import Components from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import WindiCSS from 'vite-plugin-windicss';
import PostcssAdvancedVars from 'postcss-advanced-variables';
import PostcssNested from 'postcss-nested';

import DesignTokens from './src/styles/design-tokens.json';

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
      // map: dev ? { inline: false } : false,
      // parser: scss ? 'postcss-scss' : false,
      plugins: [
        PostcssAdvancedVars({ variables: DesignTokens }), // UPDATED
        PostcssNested(),
      ],
    },
  },
});
