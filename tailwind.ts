// Import this into your own tailwind.config.js file like this:
/*
  import config from '@swiftprotocol/assets/tailwind'
  module.exports = config
*/

const colors = require('tailwindcss/colors')

const TailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@swiftprotocol/client/react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue, DEFAULT: colors.blue['600'] },
        keplr: {
          ultramarine: '#314FDF',
          violet: '#5A00E8',
          purple: '#8B4DFF',
          cian: '#1BB8FF',
          black: '#0A0718',
          white: '#EBF7FD',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}

export default TailwindConfig
