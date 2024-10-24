/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#722B76",
          secondary: "#FACC5A",
        },
        state: {
          info: "#A3C1DA",
          success: "#5CB85C",
          warning: "FFC107",
          error: "D9534F",
        },
        black: {
          1: "333333",
          2: "000000",
        },
        grey: {
          1: "4A4A4A",
          2: "9E9E9E",
        },
        white: {
          1: "#FAFAFA",
          2: "#FFFFFF",
        },
        beige: {
          1: "#F6E3CC",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        h1: "3.5rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h5: "1.5rem",
        h6: "1rem",
        xs: "0.625rem",
        sm: "0.75rem",
      },
      fontWeight: {
        h1: 900,
        h2: 700,
        h3: 700,
        h4: 700,
        h5: 700,
        h6: 700,
        xs: 700,
        bold: 700,
        regular: 400,
        light: 300,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".card": {
          borderRadius: "12px",
          overflow: "hidden",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
