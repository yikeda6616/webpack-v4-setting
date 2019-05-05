// Constants
const MODE = 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.ts',

  module: {
    rules: [
      {
        // Target .ts files
        test: /\.ts$/,
        // Compile TypeScript
        use: 'ts-loader'
      }
    ]
  },

  // resolve import syntax in .ts files
  resolve: {
    extensions: ['.ts']
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
