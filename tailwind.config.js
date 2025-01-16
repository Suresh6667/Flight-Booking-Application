module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E4FCF', // Blue color for header and buttons
        secondary: '#F6F7FB', // Light gray background
        textPrimary: '#111827', // Dark text
        textSecondary: '#6B7280', // Gray text
        accent: '#FFB400', // Accent yellow for buttons
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font family used in the design
      },
    },
  },
  plugins: [],
};
