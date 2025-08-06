/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sietevGreen: "#a2d600",
        sietevBlue: "#3d3dfc",
        sietevGreenDark: "#7aa500",
        sietevBlueDark: "#2a2aa6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        sietev: "0 4px 32px 0 rgba(61, 61, 252, 0.12)",
      },
    },
  },
  plugins: [],
};
