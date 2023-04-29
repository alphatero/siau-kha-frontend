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
    extend: {
      colors: {
        primary: '#098383',
        secondary: '#8C6F4C',
        warn: '#DA483B',
      },
      fontFamily: {
        "noto-sans": ['Noto Sans TC', 'sans-serif'],
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
        h5: [
          '20px',
          {
            lineHeight: '24px',
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
          }
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
