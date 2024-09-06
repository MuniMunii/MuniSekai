/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      textShadow: {
        outline:
          "1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000",
      },
      fontFamily: {
        test: ['"Shrikhand"', "serif"],
        testDesc: ['"Share"', "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        themeGreen: "#33CCBA",
        LeonidTheme: "#4455DD",
        MMJTheme: "#6CCB20",
        VBSTheme: "#EE1166",
        WSTheme: "#FF9900",
        CordTheme: "#884499",
      },
      transitionProperty: {},
      transitionDuration: {},
      backgroundSize: {
        fullMiddle: "100% auto",
      },
    },
  },
  plugins: [
    flowbite.plugin()({
      Carousel: true,
    }),
    
  ],
};
