/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all the JSX files in your src folder
  ],
  theme: {
    extend: {
      width: {
        15: "15%",
        30: "30%",
        80: "80%",
      },
    },
  },
  plugins: [],
};
