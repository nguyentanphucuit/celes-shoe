/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        primary: {
          DEFAULT: "rgb(79,70,229)", // indigo-600
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        transparent: "transparent",
        current: "currentColor",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      transparent: "transparent",
      current: "currentColor",
    },
  },
  safelist: [
    {
      pattern:
        /bg-(red|green|blue|yellow|indigo|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
