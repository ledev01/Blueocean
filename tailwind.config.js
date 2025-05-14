// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         customDarkBlue: '#03242F', 
//         blueGray: 'rgb(108, 131, 154)',
//         bgScreen: '#081C2A',
//         footer: '#C8C8C8',
//       },
//       fontFamily: {
//         sans: ['Roboto', 'sans-serif'], 
//         script: ['"Playfair Display"', 'serif'],
//       },
//       fontSize: {
//         '24px': '24px', 
//         '13px': '13px',
//       },
//       keyframes: {
//         'shake-spin': {
//           '0%': { transform: 'rotate(0deg)' },
//           '10%': { transform: 'rotate(15deg)' },
//           '20%': { transform: 'rotate(-15deg)' },
//           '30%': { transform: 'rotate(10deg)' },
//           '40%': { transform: 'rotate(-10deg)' },
//           '50%': { transform: 'rotate(5deg)' },
//           '60%': { transform: 'rotate(-5deg)' },
//           '70%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(0deg)' },
//         },
//       },
//       animation: {
//         'shake-spin': 'shake-spin 1s ease-in-out infinite 2s',
//       },
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkBlue: '#03242F',
        blueGray: 'rgb(108, 131, 154)',
        bgScreen: '#081C2A',
        footer: '#C8C8C8',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        script: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '24px': '24px',
        '13px': '13px',
      },
      keyframes: {
        'shake-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-15deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'rotate(-5deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'shake-spin': 'shake-spin 1s ease-in-out infinite 2s',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        //  '.clip-left': {
        //   'clip-path': 'polygon(0 0, 50% 0, 35% 100%, 0 100%)',
        //   'z-index': '10',
        // },
        // '.clip-right-inverted': {
        //   'clip-path': 'polygon(50% 100%, 100% 100%, 100% 0, 65% 0)',
        //   'z-index': '20',
        // },
         '.clip-left': {
      'clip-path': 'polygon(0 0, 56% 0, 41% 100%, 0 100%)',
      'z-index': '10',
    },
    '.clip-right-inverted': {
      'clip-path': 'polygon(44% 100%, 100% 100%, 100% 0, 59% 0)',
      'z-index': '20',
    },
      });
    }),
  ],
};
