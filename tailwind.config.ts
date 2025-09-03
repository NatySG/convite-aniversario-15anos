/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair-display)", "serif"],
        cursiva: ["var(--font-cursiva)", "cursive"],
      },
    },
  },

  plugins: [],
};
