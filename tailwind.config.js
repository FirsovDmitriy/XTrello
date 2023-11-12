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
        primary: '#0C66E4',
        'primary-textColor': '#373737',
        'primary-backColor': '#f4f4f4',
        error: '#B3261E',
        'dark-border': '#101418',
        hovered: 'rgba(121, 116, 126, 0.2)',
        'secondary-textColor': '#8E8E8E'
      }
    },
  },
  plugins: [],
}