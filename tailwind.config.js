/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Arial', 'ui-sans-serif']
      },
      boxShadow: {
        'top-lg': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require("daisyui")],
}
