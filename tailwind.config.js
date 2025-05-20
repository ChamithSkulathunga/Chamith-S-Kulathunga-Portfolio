const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"],
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },


      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: '0.5' },
          '100%': { transform: 'translateY(-1000px)', opacity: '0' },
        },
      },
      animation: {
         float: 'float 20s linear infinite',
       
      },
      
     

    },
  },
  darkMode: 'selector',
  plugins: [],
};
