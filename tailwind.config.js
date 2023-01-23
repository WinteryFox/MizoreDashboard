const innerContainerSize = '76vh'

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
        ic: innerContainerSize
      },
      minHeight: {
        ic: innerContainerSize
      },
      maxHeight: {
        halfpage: '7in',
        page: '11in'
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
  },
  plugins: [],
}
