/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Vazir': ['Vazir'],
      },
      colors: {
        'primary-p':'#7e22ce',
        'primary-y':'#ffcd30',
        'primary-pk':'#F84AD0',
        'primary-b':'#01C9D8',
        'white':'#fff',
        'secondery':'#fdfeff'
      },
      screens:{
        'xs':'500px',
        '2xs':'325px'
      }
    },
  },
  plugins: [],
}

