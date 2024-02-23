/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Heading: ["Merriweather", "serif"],
        Paragraph: ["Montserrat", "sans-serif"],
        Quotes: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
