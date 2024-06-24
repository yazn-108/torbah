/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./*/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.jpeg')",
        'Why-image-1': "url('./assets/Why-image-1.jpeg')",
        'Why-image-2': "url('./assets/Why-image-2.jpeg')",
        'Why-image-3': "url('./assets/Why-image-3.jpeg')",
        'about-us': "url('./assets/about.jpg')"
      },
    },
  },
  plugins: [
  ],
}