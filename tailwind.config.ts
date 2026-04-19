import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        soft: 'var(--soft)',
        softRose: 'var(--soft-rose)',
        line: 'var(--line)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(30, 20, 15, 0.08)',
      },
      borderRadius: {
        xxl: '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
