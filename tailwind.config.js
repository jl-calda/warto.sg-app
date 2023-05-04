/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "",
          light: "#4A4A4A",
        },
        primary: {
          main: "#FFC700",
          light: "#FFD700",
          dark: "#FFB800",
          hover: "#FFC700",
        },
        secondary: {
          main: "#FFC700",
          light: "#FFD700",
          dark: "#FFB800",
          hover: "#FFC700",
        },
      },
    },
  },
  plugins: [],
};
