const path = require('path');
// Require the CopyWebpackPlugin
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: {
    background: './src/background/background.js',
    // Uncomment the following lines as needed when you're ready to include these entries
    // popup: './src/popup/popup.js',
    // content: './src/content/content.js'
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
  // Add the plugin configuration here
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
        // Here you can add more patterns to copy other files or directories as needed
        // Example: { from: 'src/popup/popup.html', to: 'popup.html' },
        // Example: { from: 'src/images', to: 'images' }
      ],
    }),
  ],
};
