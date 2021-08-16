import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'class',
  plugins: [require('@windicss/plugin-scrollbar')],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAF9',
          dark: '#0A0A0A',
        },
      },
    },
  },
});
