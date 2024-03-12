/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: { 'my-image': "url('/img/blurredImg.jpg')", }, },
  },
  plugins: [],
}
