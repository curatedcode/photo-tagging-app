/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "modals-image": "url('/start-modal-bg.svg')"
      },
      backgroundColor: {
        "modal-green": "rgb(22,28,20)",
        "modal-light-green": "rgb(35,80,37)"
      }
    },
  },
  plugins: [],
}
