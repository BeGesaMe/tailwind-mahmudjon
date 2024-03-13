/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        // sm: ['14px', '20px'],
        big: ['50px', '60px']
      },
      colors: {
        'black': '#18181B',
        'gold': '#FFD700',
        'greey': '#BCBCBC',
        'blue': '#516EFF',
      }
    },
  },
  plugins: [],
}
