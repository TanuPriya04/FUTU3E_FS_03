
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      amul: "#e60000",
      cream: "#fff8f0",
      yellowish: "#ffc107"
    },
    },
  },
  plugins: [],
}
