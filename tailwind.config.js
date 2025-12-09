/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeCarousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        marqueeRight: 'marqueeRight 20s linear infinite',
        marqueeCarousel: 'marqueeCarousel 60s linear infinite',
      },
    },
  },
  plugins: [],
};
