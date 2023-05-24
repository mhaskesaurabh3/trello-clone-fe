/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('src/assets/login-background.jpg')",
      },
      colors: {
        'btn-green': '#5AAC44',
      },
    },
  },
  plugins: [],
};
