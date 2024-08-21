// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(90deg, #FF6B00 0%, #FFBD6F 100%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
