// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'red-300': '#ff525d',
      'red-50': '#ff7a85',
      'blue-800': '#1f3f5b',
      'blue-gray-100': '#c8c8cb',
      'blue-gray-800': '#25252d',
      'white': '#ffffff',
    },
    gradientColorStops: {
      'red-300': '#ff8f70',
      'red-100': '#ff3d54',
      'blue-gray-800': '#2c2d3f',
      'blue-gray-desat': '#3f4164',
    },
    extend: {
      fontFamily: {
        'overpass': ['Overpass'],
        'ubuntu': ['Ubuntu'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
      fill: ['hover'],
      fontWeight: ['dark'],
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
