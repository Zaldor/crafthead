import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', ...fontFamily.sans],
        display: ['"General Sans"', ...fontFamily.sans],
      },
      colors: {
        primary: '#FFD400',
        black: '#0B0B0B',
        gray: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#D9D9D9',
          300: '#B0B0B0',
          400: '#8A8A8A',
          500: '#6B6B6B',
          600: '#4F4F4F',
          700: '#3A3A3A',
          800: '#262626',
          900: '#121212',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
