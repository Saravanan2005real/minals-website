import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#002B5B',
        secondary: '#B8860B',
        accent:    '#D4AF37',
        'text-main': '#333333',
        'text-light': '#666666',
        'bg-light': '#f9f9f9',
        'bg-food':     '#f0f4f0',
        'bg-cleaning': '#f0f7ff',
      },
      fontFamily: {
        inter:    ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        card:   '0 10px 26px rgba(0,0,0,0.03)',
        panel:  '0 10px 30px rgba(0,0,0,0.05)',
        soft:   '0 4px 15px rgba(0,0,0,0.1)',
        filter: '0 10px 30px rgba(0,0,0,0.03)',
      },
      gridTemplateColumns: {
        'footer': '1.8fr 1fr 1fr 1fr 1fr',
        'products-shell': '280px 1fr',
        'products-hero': '1.1fr 0.9fr',
        'features-bar': 'repeat(4, 1fr)',
        'heritage': '0.65fr 2fr',
      },
    },
  },
  plugins: [],
};

export default config;
