/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        burgundy: { DEFAULT: '#6D1A2A', light: '#7B2233', dark: '#4E1220' },
        cream: { DEFAULT: '#FAF6EE', dark: '#F1EADC' },
        ink: '#2B2326',
        rule: '#D9CDBE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Libre Franklin"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [],
};
