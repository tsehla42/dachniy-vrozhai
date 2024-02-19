import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Anime Ace v05"', 'Montserrat', 'Calibri', 'Helvetica', 'sans-serif'],
        secondary: ['Montserrat', 'Calibri', 'Helvetica', 'sans-serif'],
        tertiary: ['Calibri', 'Helvetica', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#FCFFEE',
          200: '#EDF6C5',
          300: '#C7D978',
          400: '#B2C851',
          500: '#92A92C',
          600: '#738815',
          700: '#5B6C0F',
          800: '#3F4B07',
          900: '#252D01',
          950: '#20280b',
        },
        orange: {
          50: '#FFF9F3',
          100: '#FFF2E5',
          200: '#FFE7D2',
          300: '#FFC793',
          400: '#FFA859',
          500: '#FD8D27',
          600: '#D16B0D',
          700: '#934A07',
          800: '#5C2E03',
          900: '#2F1701',
        },
        gray: {
          200: '#E0E0E0',
          300: '#C0C0C0',
          400: '#A0A0A0',
          500: '#969696',
          600: '#808080',
          700: '#565656',
          800: '#404040',
          900: '#202020',
          950: '#121212',
        },
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        'slide-off': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1000px)' },
        },
        'horizontal-bounce': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'slide-off': 'slide-off 0.5s cubic-bezier(0,.01,1,.21) 1 forwards',
        'horizontal-bounce': 'horizontal-bounce 1s infinite',
      },
    },
  },
};
