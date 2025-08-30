/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#3CE6B0",
        deep: "#0B1533",
        sky: "#3FA9F5",
        solar: "#FF8A35",
        sun: "#FFD75E",
        fog: "#F6F8FA"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px"
      },
      backdropBlur: {
        xs: "8px"
      }
    }
  },
  plugins: []
};
