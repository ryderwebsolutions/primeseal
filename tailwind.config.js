/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        blue: '#165FA8',
        lime: '#B5E61D',
        mist: '#F2F5F8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 18px 45px -24px rgba(11, 31, 58, 0.45)',
      },
    },
  },
  plugins: [],
}

