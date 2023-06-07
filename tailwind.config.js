/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        "primary-500": "#0d6efd",
        "primary-600": "#0b5ed7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
