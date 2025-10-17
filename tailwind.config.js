/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts}"],
  // remove unused styles in production
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        defaultBgColor: "#0F4730",
        raceLineColorDark: "#417154",
        raceLineColorLight: "#3a644b",
      },
      fontFamily: {
        sans: ["Oswald", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
