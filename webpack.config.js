const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    worker: './mockServiceWorker.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'source-map',
};
