/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jazinski: {
          blue: '#3d5a73',
          gold: '#c9a65c',
        },
      },
    },
  },
  plugins: [],
}
