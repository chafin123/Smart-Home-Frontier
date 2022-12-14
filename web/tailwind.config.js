/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sf-Blue":"#1B6AF0",
        "sf-teal":"#2DD8E1",
        "sf-gray":"#EBECF0",
        "sf-dark-gray":"#8992A9" 
      },
      fontFamily: {
        "Bree-Serif": ["Bree Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
}
