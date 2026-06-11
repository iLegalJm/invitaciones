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
        serif: ['"Parisienne"', 'serif'],
        sans: ['"Parisienne"', 'sans-serif'],
        parisienne: ['"Parisienne"', 'cursive'],
      },
      backgroundImage: {
        'parallax-pattern': "url('/assets/images/pattern.png')",
      }
    },
  },
  plugins: [],
}
