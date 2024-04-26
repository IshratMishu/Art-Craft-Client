/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}