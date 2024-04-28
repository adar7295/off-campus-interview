/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'white': '#ffffff',
    //   'indigo': '#6366F1',
    //   'grey': '#495057',
    //   'indigo-700': '#3333cc',

    //   'blue': {
    //     50: '#000000',
    //     100: '#89c2d9',
    //     150: '#61a5c2',
    //     200: '#468faf',
    //     250: '#2c7da0',
    //     300: '#2a6f97',
    //     350: '#014f86',
    //     400: '#01497c',
    //     450: '#013a63',
    //     500: '#012a4a',
    //   },
    // }

  },
  extend: {

  },
  plugins: [require("daisyui")],
}