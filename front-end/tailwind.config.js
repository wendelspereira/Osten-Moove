/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#475569",
          600: "#64748B",
          300: "#94A3B8",
          100: "#F1F5F9",
        },

        blue: {
          900: "#0EA5E9",
        },
      },
    },
  },
  plugins: [],
};
