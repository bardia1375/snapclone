/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#9333EA', // custom purple
        customGray: '#f7f7f7',
        darkGreen:"#000"
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'xs': '475px',
        'md':"760px",
        'xl': '968px',
        '2xl': '1200px',
        '3xl': '1600px',
      },
    },
  },
  darkMode: 'class',
}
