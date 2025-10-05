/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-gold': '#E6CA97',
        'white-gold': '#D9D9D9',
        'rose-gold': '#E1AAA9',
      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
