// Constants
const MODE = 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.js',

  module: {
    rules: [
      {
        // Target .js files
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // Transpile ES2019 to ES5
                '@babel/preset-env',
                // Read jsx syntax
                '@babel/react'
              ]
            }
          }
        ]
      }
    ]
  },

  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },

  devServer: {
    contentBase: 'dist',
    open: true
  }
};
