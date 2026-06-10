/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f6fa',
          100: '#e4ebf4',
          200: '#cddbea',
          300: '#a7c1db',
          400: '#7a9fca',
          500: '#5881b9',
          600: '#4567a1',
          700: '#385383',
          800: '#163058', // lighter navy
          900: '#0f2040',
          950: '#0a1628', // dark
          975: '#040d1f', // darkest
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c', // light orange
          500: '#f97316', // bright orange
          600: '#ea580c', // main orange
          700: '#c2410c', // dark orange
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
