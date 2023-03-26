/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '400px',
      // => @media (min-width: 400px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#ff7658',
        secondary: '#fef1ed',
        tertiary: '#969696 ',

        primaryText: '#484848',
        secondaryText: '#8b8b8b',
        tertiaryText: '#6A7077',
      },
      fontSize: {
        '7xl': '5rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        floatUp: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatDown: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatLeft: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(10px)',
          },
          '50%': {
            transform: 'translateY(10px) translateX(-10px)',
          },
          '75%': {
            transform: 'translateY(10px) translateX(10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        floatRight: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(10px) translateX(-10px)',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(10px)',
          },
          '75%': {
            transform: 'translateY(10px) translateX(10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        // pingOne: {}
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        floatUp: 'floatUp 6s ease-in-out infinite',
        floatDown: 'floatDown 6s ease-in-out infinite',
        floatLeft: 'floatLeft 12s ease-in-out infinite',
        floatRight: 'floatRight 12s ease-in-out infinite',
        pingOne: 'ping .5s ease-in-out 1'

      },
    },
    fontFamily: {
      // Add your custom fonts and enjoy.
      // inter: ['Inter', 'Sans-serif'],
      // alkalami: ['Alkalami', 'Sans-serif'],
      // montserrat: ['Montserrat', 'Sans-serif'],
    },
  },
  plugins: [],
}
