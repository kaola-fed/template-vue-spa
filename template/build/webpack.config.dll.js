const webpack = require('webpack');
const path = require('path');


function resolve(p = '') {
  return path.join(__dirname, '../', p);
}

module.exports = {
  mode: 'production',
  entry: {
    runtime: [
      'vue',
      'vuex',
      'vue-router',
      'element-ui',
      'axios'
    ]
  },
  output: {
    path: resolve('./dist/dll'),
    library: '[name]_[chunkhash]',
    filename: '[name]_[chunkhash].js',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devtool: "source-map",
  plugins: [
    new webpack.DllPlugin({
      context: resolve(),
      name: '[name]_[chunkhash]',
      path: resolve('./dist/dll/manifest.json'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}