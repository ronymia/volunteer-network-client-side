/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto', sans-serif"],
        Montserrat: ["Montserrat', sans-serif"],
      },
      colors: {
        primary: "#3F90FC",
        yellow: "#FFBD3E",
        orange: "#FF7044",
        purple: "#421FCF",
      }
    },
  },
  plugins: [],
}

