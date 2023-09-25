import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
      grotesk: ['Space Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        biru: '#66d9ed',
        ungu: '#9b51e0',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
