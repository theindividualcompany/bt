const {theme, variants} = require('./theme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
  variants: {
    ...variants,
  },
  // plugins: [require('@tailwindcss/ui')],
}
