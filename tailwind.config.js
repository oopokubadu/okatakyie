module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary2: "#3e4859",
        primary: "#2b323e",
        secondary: "#707070",
        accent: "#1d8adc",
      },
      padding: {
        nav: "var(--nav-height)",
      },
      fontFamily: {
        display: "PJDisplay",
        text: "PJText",
        sans: ["Open Sans", "sans-serif"],
        serif: ["NoeDisplay", "serif"],
      },
    },
    debugScreens: {
      position: ["top", "left"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
