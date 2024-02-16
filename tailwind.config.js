/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        playFair: "'Playfair Display', serif",
        caslon: "'Libre Caslon Display', serif",
        kumbh: "'Kumbh Sans', sans-serif",
      },
    },
  },

  plugins: [require("daisyui")],
};
