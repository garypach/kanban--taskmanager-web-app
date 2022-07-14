/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000112',
      'purple': '#635FC7',
      'purple-hover': '#A8A4FF',
      'dark-bg': '#20212C',
      'dark-gray': '#2B2C37',
      'medium-gray':'#828FA3',
      'dark-lines': '#3E3F4E',
      'light-lines': '#E4EBFA',
      'light-bg': '#F4F7FD',
      'red': '#EA5555',
      'red-hover':'#FF9898',
    },
    fontFamily: {

      sans: ['Plus Jakarta Sans','Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}