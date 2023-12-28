/** @type {import('tailwindcss').Config} */
const defaultTheme = require(`tailwindcss/defaultTheme`)

export default {
  content: [
    `./index.html`,
    `./src/**/*.{vue,js}`
  ],
  theme: {
    fontFamily: {
      'sans': [`Roboto`, ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

