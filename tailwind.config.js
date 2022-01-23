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
      'red-100': '#ff8f70',
      'red-300': '#ff3d54',
      'blue-gray-800': '#2c2d3f',
      'blue-gray-desat': '#3f4164',
    },
    extend: {
      fontFamily: {
        'heading': ['Overpass'],
        'body': ['Ubuntu'],
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        '4xl': '5rem',
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
