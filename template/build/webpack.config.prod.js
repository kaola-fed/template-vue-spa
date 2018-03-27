const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  output: {
    chunkFilename: 'chunk_[name]_[chunkhash:8].js'
  }
});