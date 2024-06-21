/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      g1: '#00D763',
      g2: '#56D992',
      w1: '#F1F2F6',
      w2: '#B7B7B9',
      b1: '#111204',
      b2: '#1A1E23',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      mobile: {
        max: '768px',
      },
      tablet: {
        max: '1024px',
      },
    },
  },
  plugins: [],
};
