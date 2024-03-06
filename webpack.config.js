const path = require('path');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: {
    background: './src/background/background.js'/*,
    popup: './src/popup/popup.js',
    content: './src/content/content.js'*/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
