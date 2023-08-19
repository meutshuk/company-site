/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        cs_blue: "var(--primary)",
        ascent: "var(--ascent)",
        red: "var(--red)",
        header: "var(--header)",

        // green: "var(--green)",
        // yellow: "var(--yellow)",
        // pink: "var(--pink)",
        // lavender: "var(--lavender)",
      },
    },
  },
  plugins: [],
};
