import { defineConfig } from 'vite-plugin-windicss';
import { transform } from 'windicss/helpers';

// import colors from 'windicss/colors';

export default defineConfig({
  darkMode: 'class',
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
  plugins: [transform('scrollbar')],
  // theme: {
  //   extend: {
  //     typography: {
  //       DEFAULT: {
  //         css: {
  //           maxWidth: '65ch',
  //           color: 'inherit',
  //           a: {
  //             color: 'inherit',
  //             opacity: 0.75,
  //             fontWeight: '500',
  //             textDecoration: 'underline',
  //             '&:hover': {
  //               opacity: 1,
  //               color: colors.teal[600],
  //             },
  //           },
  //           b: { color: 'inherit' },
  //           strong: { color: 'inherit' },
  //           em: { color: 'inherit' },
  //           h1: { color: 'inherit' },
  //           h2: { color: 'inherit' },
  //           h3: { color: 'inherit' },
  //           h4: { color: 'inherit' },
  //           code: { color: 'inherit' },
  //         },
  //       },
  //     },
  //   },
  // },
});
