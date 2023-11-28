/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primaryColor: '#579DFF',

        'text-color': '#373737',
        'body-color': '#f4f4f4',

        errorColor: '#B3261E',
        hoveredColor: 'rgba(121, 116, 126, 0.2)',
        secondaryColor: '#8E8E8E',

        thirdColor: 'rgba(0, 0, 0, 0.15)',
        'disabled-bg': '#1F262E',
        'disabled-font': '#3A414A'
      }
    },
  },
  plugins: [],
}