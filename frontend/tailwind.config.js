import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepBlue: "#00296B",
        blue: "#003F88",
        lightBlue: "#00509D",
        darkYellow: "#FDC500",
        lightYellow: "#FFD500",
      },
    },
  },
  plugins: [daisyui],
};
