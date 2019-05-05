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

  // Track original css source map
  devtool: 'source-map',

  module: {
    rules: [
      /*
       * sass-loader will compile .scss into .css
       * postcss-loader will enable autoprefixer
       * css-loader will bundle .css into js
       * style-loader will embed <link> tag into <head> tag
       *
       */
      {
        // Target file extension
        test: /\.scss/,
        use: [
          // style-loader will embed <link> tag into <head> tag
          'style-loader',

          // css-loader will bundle .css into js
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              /*
               * 0 => no loaders (default)
               * 1 => postcss-loader
               * 2 => postcss-loader, sass-loader
               */
              importLoaders: 2
            }
          },
          // postcss-loader will enable autoprefixer
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                // Enable Autoprefixer
                require('autoprefixer')({ grid: true })
              ]
            }
          },

          // sass-loader will compile .scss into .css
          { loader: 'sass-loader', options: { sourceMap: enabledSourceMap } }
        ]
      },
      {
        // Target file extensions
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
