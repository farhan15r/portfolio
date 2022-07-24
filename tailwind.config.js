/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        dark: "#171717",
        dark60: "#525252",
        dark40: "#737373",
        dark20: "#e5e7eb",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
