/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        KodeMono: ["Kode Mono", ...fontFamily.sans],
        Moulpali: ["Moulpali", ...fontFamily.sans],
        Montserrat: ["Montserrat", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};

