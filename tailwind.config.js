module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    screens: {
      xs: '500',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      padding: '2rem',
    },
    extend: {
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
      },
      borderRadius: {},
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Lato: ['Lato', 'sans-serif'],
      Mada: ['Mada', 'sans-serif'],
      BowlbyOne: ['Bowlby+One', 'sans-serif'],
      Jaldi: ['Jaldi', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
