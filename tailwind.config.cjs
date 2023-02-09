/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.tsx",
    "./src/*/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d428a"
      }
    },
  },
  plugins: [],
}
