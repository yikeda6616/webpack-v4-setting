// Constants
const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.js',

  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },

  devServer: {
    contentBase: 'dist',
    open: true
  },

  module: {
    rules: [
      /*
       * sass-loader will compile .scss into .css
       * css-loader will bundle .css into js
       * style-loader will embed <link> tag into <head> tag
       *
       */
      {
        test: /\.scss/,
        use: [
          'style-loader', // This will embed to <link> tag
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              /*
               * 0 => no loaders (default)
               * 1 => postcss-loader
               * 2 => postcss-loader, sass-loader
               */
              importLoaders: 2
            }
          },
          { loader: 'sass-loader', options: { sourceMap: enabledSourceMap } }
        ]
      }
    ]
  }
};
