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
          dark: '#1D2849',       // Azul marino oscuro
          primary: '#175294',    // Azul rey principal
          secondary: '#308FBB',  // Azul medio
          accent: '#74B0D3',     // Azul claro
          cream: '#D5E9F1',      // Azul hielo / Fondo suave
          gold: {
            light: '#74B0D3',
            DEFAULT: '#308FBB',
            dark: '#175294',
          },
          olive: '#1D2849',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Parisienne', 'cursive'],
      },
      backgroundImage: {
        'parallax-pattern': "url('/assets/images/pattern.png')",
      }
    },
  },
  plugins: [],
}
