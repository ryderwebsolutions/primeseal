/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#030813',
        charcoal: '#0C1526',
        navy: '#0B1F3A',
        blue: '#165FA8',
        mist: '#E5EBF2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '"Segoe UI"', 'sans-serif'],
        display: ['var(--font-rajdhani)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 18px 45px -24px rgba(11, 31, 58, 0.45)',
      },
    },
  },
  plugins: [],
}

