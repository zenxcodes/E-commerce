module.exports = {
  purge: [
    'public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
        backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#f42d2d',
        'secondary': '#ffed4a',
        'danger': '#e3342f'
       }),

       width:{
         'cart-width': '27px'
       },

       height:{
         'banner-img': '600px',
         'cart-height': '24px'
       },

       borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'brd-color': '#e1e3e4'
      }),

      borderWidth: {
        'b-width': '1px'
      },

       border:{
        'brdr-bottom': '1px solid'
       },

       borderRadius:{
        'sm': '3px'
      },

       minHeight:{
         'banner-img-min': '600px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
