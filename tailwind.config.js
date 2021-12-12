module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      borderRadius:{
        '4xl':"30px",
        '5xl':"36px",
      },
      colors: {
        primary: {
          light: "#11293B",
          dark: "#0D1F2B",
        },
        secondary: {
          light: "#E7E9EB",
          dark: "#203C51",
        },
        cgray: {
          light: "#677585",
          
        },
        cgreen: "#2DCCA9",//cgreen = custom green
        cyellow: "#F9FFB7",
        cred: "#FD4E61",
      }
    }
  },
  plugins: [],
}
