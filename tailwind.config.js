/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plum: "#29243B",
        paper: "#F5F1F8",
        lavender: "#C9B9E6",
        bluegrey: "#A8B7C9",
        peach: "#D8B5A5",
        muted: "#625B70",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
        display: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
