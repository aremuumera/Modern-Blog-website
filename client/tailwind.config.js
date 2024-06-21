/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack1: "#676767",
      },
      fontFamily:{
        "primary": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
