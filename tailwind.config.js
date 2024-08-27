/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        themeGreen:'#33CCBA',
        LeonidTheme:'#4455DD',
        MMJTheme:'#6CCB20',
        VBSTheme:'#EE1166',
        WSTheme:'#FF9900',
        CordTheme:'#884499'
      },
      transitionProperty:{
      },
      transitionDuration:{
      },
      backgroundSize:{
        'fullMiddle':'100% auto'
      }
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     '.translate-x-transition': {
    //       transform: 'translateX(100%)',
    //       transition: 'transform 1000ms ease-in-out 250ms',
    //     },
    //   });
    // }),
  ],
}

