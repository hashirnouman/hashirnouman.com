/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      custom: {
        dark: "#001F3F",
        light: "#083358",
        DEFAULT: "#FFD717",
        lightest: "#FFFFFF",
      },
    },
    extend: {},
  },
  plugins: [],
};
