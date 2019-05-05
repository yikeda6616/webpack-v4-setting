// Constants
const MODE = 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.tsx',

  module: {
    rules: [
      {
        // Target .ts files
        test: /\.tsx?$/,
        // Compile TypeScript
        use: 'ts-loader'
      }
    ]
  },

  // resolve import syntax in .ts files
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
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
