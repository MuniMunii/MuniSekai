/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",flowbite.content()],
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
  plugins: [flowbite.plugin()],
}

