/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'synapse': {
          'cream': '#FCF5F5',
          'mint': '#EBFDFD',
          'lavender': '#DCD8E8',
          'sage': '#D6E6CA',
          'peach': '#FFF5E0',
          'gold': '#E6CE87',
          'lime': '#BFEB96',
          'sunshine': '#FFFBB5',
          'lilac': '#E6CEED',
          'sky': '#93E0ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 