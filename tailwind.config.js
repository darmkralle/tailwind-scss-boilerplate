/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.php',
    './templates/**/*.php',
    './**/*.php',
    './*.php',
    './*.html',
    './**/*.html',
    './build/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
