/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          background: '#ECE9D8',
          yellow: '#FFCC00',
          orange: '#FF9933',
          red: '#DE5C2F',
          gray: '#E6EAD8',
          lightBlue: '#8CAAE6',
          blue: '#6487DC',
          darkBlue: '#003399',
          green: '#13920D',
        },
        control: {
          lightOrange: '#F2C977',
          orange: '#E68B2C',
          gray: '#808080',
          softOliveGray: '#A1A192',
          warmGray: '#B8B4A3',
          mutedBlue: '#7F9DB9',
          blue: '#2178E0',
          skyBlue: '#128BE7',
          cornflowerBlue: '#4D9FE1',
          azure: '#83A6F4',
        },
        'window-frame': {
          cobaltBlue: '#081BCB',
          slateBlue: '#4977B4',
          azure: '#0062EA',
          skyBlue: '#14A5F4',
          powderBlue: '#8EB6D9',
          brightSkyBlue: '#5DB3FF',
          vividGreen: '#008D00',
          emerald: '#31A431',
          mintGreen: '#5EDB5E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
