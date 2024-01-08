/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#692481",
        secondary: "#5f5f5f",
      },
    },
  },
  plugins: [],
};
