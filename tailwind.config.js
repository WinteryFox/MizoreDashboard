/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        ic: '80vh'
      },
      minHeight: {
        ic: '80vh'
      },
      maxHeight: {
        halfpage: '5in',
        page: '11in'
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
  },
  plugins: [],
}
