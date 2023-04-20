const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    mockServiceWorker: './mockServiceWorker.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 'auto',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html',
    }),
  ],
  devtool: 'source-map',
};
