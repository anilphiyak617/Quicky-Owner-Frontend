module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { rancho: ["Rancho", "sans-serif"] },

    extend: {
      keyframes: {
        slideL: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideR: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideL: "slideL 500ms linear",
        slideR: "slideL 500ms linear",
      },
    },
  },
  plugins: [],
};
