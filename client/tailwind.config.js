/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      colors: {
        primary: "#11175D",
        secondary: "#086FA4",
      },
    },
  },
  plugins: [],
};
