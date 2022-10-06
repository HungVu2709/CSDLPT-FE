/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "form-item-hover": "0 8px 25px -8px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
