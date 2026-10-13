/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#00AEEF",
        dark: "#0B1220",
        soft: "#F5F7FB"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 174, 239, 0.25)"
      }
    },
  },
  plugins: [],
}