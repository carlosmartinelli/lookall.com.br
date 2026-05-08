/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow:  '#f5c518',
          blue:    '#2e5bff',
          green:   '#1fbf6b',
          orange:  '#f97316',
          purple:  '#8b5cf6',
        },
        dark:  '#0b0f1a',
        body:  '#374151',
        muted: '#5b6473',
        surface: {
          DEFAULT: '#ffffff',
          subtle:  '#fafbfd',
        },
        border: '#e8eaee',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
