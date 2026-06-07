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
          primary: '#A87B96',    // Mauve Mist Principal
          secondary: '#C49CB4',  // Mauve Suave
          cream: '#E2CBD8',      // Fondo Sedoso
          accent: '#1F2937',     // Cuerpo de Texto / Oscuro
          gold: {
            light: '#dfc08d',
            DEFAULT: '#c5a059',
            dark: '#a3844a',
          },
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
