/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/apps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minWidth: {
      md: '468px',
    },
    minHeight: {
      lg: '672px',
      screen: '100vh',
    },
    extend: {
      colors: {
        primary: '#098383',
        secondary: '#8C6F4C',
        warn: '#DA483B',
        highlight: '#FDFDF3',
        info: '#4F7B6D',
        cover: '#FDFDF3',
      },
      fontFamily: {
        'noto-sans': ['Noto Sans TC', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '40px',
          {
            lineHeight: '48px',
            fontWeight: '700',
          },
        ],
        h2: [
          '32px',
          {
            lineHeight: '38px',
            fontWeight: '700',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '29px',
            fontWeight: '700',
          },
        ],
        h5: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        h6: [
          '16px',
          {
            lineHeight: '19px',
            fontWeight: '700',
          },
        ],
        'fs-1': [
          '40px',
          {
            lineHeight: '48px',
            fontWeight: '400',
          },
        ],
        'fs-2': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '400',
          },
        ],
        'fs-6': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'fs-7': [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      opacity: {
        85: '0.85',
      },
      keyframes: {
        'scale-up': {
          '0%': {
            transform: 'scale(0.1)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'move-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'scale-up': 'scale-up 0.3s ease-out',
        'move-up': 'move-up 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
