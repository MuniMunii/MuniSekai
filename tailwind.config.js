/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens:{
        desktop: {'raw': '(min-height: 640px) and (min-width: 1240px)'},
      },
      keyframes:{
        bounceLoad:{
          '0%, 20%, 50%, 80%, 100%': {transform:'translateY(0)'},
          '40%' :{transform: 'translateY(-30px)'},
          '60%' :{transform: 'translateY(-15px)'},
        }
      },
      animation:{
        'bounceLoadAnimation':'bounceLoad 1.5s ease infinite'
      },
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
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),flowbite.plugin()
  ],
};
