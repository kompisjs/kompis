module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/common/**/*.{ts,tsx}',
      './src/kompis/**/*.{ts,tsx}',
      './src/pages/*.{ts,tsx}'
    ],
  },
  darkMode: 'class',
  theme: {},
  variants: {
    extend: {
      margin: ['first', 'last'],
      borderWidth: ['first', 'last'],
      padding: ['first', 'last'],
    },
  },
  plugins: [],
}