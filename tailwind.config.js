/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '.5/12': '4.1666667%',
      },
      backgroundImage: {
        'disney-video': "url('/src/source/assets/videos/category-disney.mp4')",
        'marvel-video': "url('/src/source/assets/videos/category-marvel.mp4')",
        'pixar-video': "url('/src/source/assets/videos/category-pixar.mp4')",
        'national-video': "url('/src/source/assets/videos/category-national-geographic.mp4')",
        'star-wars-video': "url('/src/source/assets/videos/category-star-wars.mp4')",
      }
    },
  },
  plugins: [],
}

