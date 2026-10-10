import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: { primary: '#0a0e1a', secondary: '#0f1420', tertiary: '#141b2b' },
        text: { primary: '#f0f4f8', secondary: '#8a939e' },
        accent: { gold: '#d4af37', light: '#e8c547', highlight: '#f2dcab' },
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
