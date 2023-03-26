/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom' : '45rem',
        'custom2' : '30rem',
        'custom3' : '20rem'
      },
     padding: {
          'custom': '160px',
     },
     backgroundImage: {
      'bg': "url('../images/svg/bg.svg')",
     },
     width : {
      'custom' : '30rem'
     }
    },
  },
  plugins: [],
}