/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/component/Homepage/UI.jsx",
   "./**/*.{html,js,jsx}"],
   content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '30': '31%',
      },
      colors: {
        'Dark-Violet': 'hsl(257, 27%, 26%)',
        'given': 'rgb(3, 220, 220)'
      },
      spacing: {
        '152': '152px',
        '67': '67px',
        '66': '66px',
        '271': '271px',
        '60': '60px',
        '82': '82%',
        '14p': '14%',
        '106': '106px',
        '244': '244px',
        '23': '23%,'
      },

    },
  },
 
  plugins: [],
}

