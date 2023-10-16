/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Arial', 'ui-sans-serif']
      }
      
    },
  },
  plugins: [require("daisyui")],
}
