import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#040507',
          secondary: '#080A0D',
          tertiary: '#0C0F13',
        },
        text: {
          primary: '#F5F6F7',
          secondary: '#8A939E',
        },
        accent: {
          gold: '#C9A24B',
          light: '#E3BD6D',
          highlight: '#F2DCAB',
        },
      },
      boxShadow: {
        gold: '0 0 24px rgba(201, 162, 75, 0.15)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
