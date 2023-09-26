module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        default: '#436372',
        hoverRed: '#ede0d4',
        title: '#1a1a1a',
        mainBackground: '#a3bbc8',
        yellowBackground: '#fcd7b6',
        darkBlue: '#243f4d',
        btnDefault: '#f2f2f2',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
    },
    fontFamily: {
      'rubik-400': ['Rubik-Regular', 'sans-serif'],
      'rubik-500': ['Rubik-Medium', 'sans-serif'],
      'rubik-700': ['Rubik-Bold', 'sans-serif'],
    },
  },
  plugins: [],
}
