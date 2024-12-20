/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all the JSX files in your src folder
  ],
  theme: {
    extend: {
      width: {
        15: "15%",
        20: "20%",
        30: "30%",
        35: "35%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
      height: {
        80: "80%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      left: {
        md: "20%",
      },
      screens: {
        "xl-custom": "1270px",
        xs: "320px",
      },
    },
  },
  plugins: [],
};
