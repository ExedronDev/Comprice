/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {"gold": "#FFD700"},
  },
  plugins: [require("daisyui")],
}
