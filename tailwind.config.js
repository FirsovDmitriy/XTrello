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
        'primary-textColor': '#373737',
        'primary-backColor': '#f4f4f4',
        error: '#B3261E',
        'dark-border': '#101418',
        hoveredColor: 'rgba(121, 116, 126, 0.2)',
        'secondary-textColor': '#8E8E8E'
      }
    },
  },
  plugins: [],
}