const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const _ = require('./utils');
const webpack = require('webpack');
const path = require('path');
const buildConfig = require('./build.config');

const {
  NODE_ENV,
  TEST_ENV
} = process.env;

const {
  MODE = 'development'
} = process.env;

const mode = MODE || 'development';

const isDev = mode === 'development';

console.info(`running in ${mode} mode`);

module.exports = {
  output: {
    publicPath: '/',
    path: buildConfig.output
  },
  entry: {
    index: [
      './src/index.js',
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': _.resolve('./src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: [{ loader: 'style-loader'}, { loader: 'css-loader' },  { loader: 'postcss-loader' }, { loader: 'less-loader' }],
            js: [{ loader: 'babel-loader' }]
          },
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, use: [{ loader: 'style-loader'}, { loader: 'css-loader' }] },
      { test: /\.less$/, use: [{ loader: 'style-loader'}, { loader: 'css-loader' }, { loader: 'less-loader' }] },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),

    new webpack.DllReferencePlugin({
      context: _.resolve(),
      manifest: require(_.resolve(buildConfig.output, 'dll/manifest.json')),
    }),

    new HtmlWebpackPlugin({
      template: _.resolve('./src/templates/index.html'),
    }),
    new AddAssetHtmlPlugin({
      filepath: _.resolve(buildConfig.output, 'dll/runtime_*.js')
    }),
  ]
}