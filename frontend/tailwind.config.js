/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#0D72CC',
      'purple': '#7e5bef',
      'darkpurple':'#f3e8ff',
      'pink': '#F0BBBB',
      'green': '#ff7849',
      'orange': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'purple-light': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'red':'#E50404',
      'voilet': {
         50: '#DCDCDC',
        100: '#D3D3D3',
        200: '#CFD8DC',
        300: '#B0BEC5',
        400: '#90A4AE',
        500: '#78909C',
        600: '#607D8B',
        700: '#546E7A',
        800: '#455A64',
        900: '#37474F',
        950: '#263238',
      }
    },
    extend: {
      colors:{
      'darkpurple':'#6049D8',
      'darkblue': '#2D3A45',
      'blue': '#0D72CC',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'green': '#ff7849',
      'orange': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'purple-light': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black':  '#000',
      'red':'#E50404',
    },
    }
  },
  
  plugins: [require("daisyui")],
}