module.exports = {
   purge: [
      `src/**/*.js`,
      `src/**/*.jsx`,
      `src/**/*.ts`,
      `src/**/*.tsx`,
      `public/**/*.html`
   ],
   theme: {
      extend: {
         fontFamily: {
            'quicksand': [ `Quicksand`, `cursive` ]
         }
      }
   },
   variants: {},
   plugins: []
}