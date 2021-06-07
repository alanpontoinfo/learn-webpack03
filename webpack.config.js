const path = require('path');

module.exports = {

 //entry: './src/index.js',

 mode: 'development',

 entry: {

   index: './src/index.js',

  // another: './src/outro-modulo.js',
   /*index: {

    import: './src/index.js',

    dependOn: 'shared',

  },

  another: {

    import: './src/outro-modulo.js',

    dependOn: 'shared',

  },

  shared: 'lodash',

 },*/
},
  output: {

   //filename: 'main.js',

   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 /* optimization: {

    runtimeChunk: 'single',

  },*/
  /*optimization: {

    splitChunks: {

      chunks: 'all',

    },

  },
*/
};