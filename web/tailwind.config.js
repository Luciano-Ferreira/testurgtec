module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        md: '4px'
      },
      colors: {
        brand: {
          300: '#966dff',
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
} 