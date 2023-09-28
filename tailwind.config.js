/** @type {import('tailwindcss').Config} */
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: ["./src/**/*.{html,js}",
'./assets/css/taiwind-theme.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@formkit/themes/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    aspectRatio: false,
  },
}