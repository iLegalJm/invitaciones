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
          primary: '#5E1929',
          secondary: '#8F5260',
          cream: '#FAF3E0',
          accent: '#EBD9D9',
          dark: '#2D2D2D',
          gold: {
            light: '#dfc08d',
            DEFAULT: '#c5a059',
            dark: '#a3844a',
          },
          olive: '#4a5d4e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],    // Para párrafos y datos técnicos
        serif: ['Playfair Display', 'serif'], // Para títulos elegantes
        script: ['Parisienne', 'cursive'],  // EXCLUSIVA para nombres destacados
      },
      backgroundImage: {
        'parallax-pattern': "url('/assets/images/pattern.png')",
      }
    },
  },
  plugins: [],
}
