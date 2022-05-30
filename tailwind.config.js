module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'ipad_mini': '744px',
      'bureau': '1440px',
    },

    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
        "Noir": "#000000",
        "Vert": "#95c11f",
        "Bleu": "#36a9e1",
        "Violet": "#951b81",
        "Rouge": "#e30f1b",
        "Orange": "#f39200",
        "Jaune": "#fcea10"
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
        "roboto": "Roboto, sans-serif",
        "mate": "Mate, serif"
      },
      "fontSize": {
        "sm": "0.75rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.5625rem",
        "3xl": "3.125rem"
      },



    },

  },
  plugins: [],
}
