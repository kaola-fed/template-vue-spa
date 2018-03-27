const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const {
  NODE_ENV,
  TEST_ENV
} = process.env;

const {
  MODE = 'development'
} = process.env;

function resolve(p = '') {
  return path.join(__dirname, '../', p);
}

const mode = MODE || 'development';

const isDev = mode === 'development';

console.info(`running in ${mode} mode`);

module.exports = {
  output: {
    publicPath: '/',
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
      '@': resolve('./src')
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
      context: resolve(),
      manifest: require(resolve('./dist/dll/manifest.json')),
    }),

    new HtmlWebpackPlugin({
      template: resolve('./src/templates/index.html'),
    }),
    new AddAssetHtmlPlugin({
      filepath: resolve('./dist/dll/runtime_*.js')
    }),

    // scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}