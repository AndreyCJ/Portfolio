import { defineConfig } from 'vite';
import { resolve } from 'path';

// Plugins
import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import WindiCSS from 'vite-plugin-windicss';
import PostcssNested from 'postcss-nested';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  plugins: [
    Vue(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({ compiler: 'vue3' }),
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
    VueI18n({
      include: [resolve(__dirname, 'locales/**')],
      runtimeOnly: true,
      compositionOnly: true,
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
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
