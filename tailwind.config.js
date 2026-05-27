/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                wedding: {
          gold: {
            light: '#dfc08d',
            DEFAULT: '#c5a059',
            dark: '#a3844a',
          },
          cream: '#fdfbf7',
          secondary: '#f9f7f2',
          accent: '#2c2c2c',
          olive: '#4a5d4e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'parallax-pattern': "url('/assets/images/pattern.png')",
      }
    },
  },
  plugins: [],
}
