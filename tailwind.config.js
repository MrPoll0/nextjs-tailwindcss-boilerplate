const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
