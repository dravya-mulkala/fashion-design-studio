import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7C3AED',
        dark: '#111827',
        muted: '#6B7280'
      }
    }
  },
  plugins: []
};

export default config;
