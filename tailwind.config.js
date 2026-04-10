/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // tailwind.config.js
    extend: {
      colors: {
        primary: "#D4AF37",      // OR (gold premium)
        primaryDark: "#B8962E",
        secondary: "#0F7B6C",    // vert émeraude profond
        secondaryLight: "#1FA38A",
        charcoal: "#1A1A1A",     // texte luxe
        light: "#F9FAFB",        // fond
        accent: "#F5E6C8",       // or léger / hover
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    }
  },
  plugins: [],
}