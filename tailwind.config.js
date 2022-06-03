module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:["Poppins","sans-serif"],
        robo:['Roboto', 'sans-serif'],
        dev:['Tiro Devanagari Hindi', 'serif']
        
      }
    },
  },
  plugins: [
        require('tailwind-scrollbar')
    ],
}
