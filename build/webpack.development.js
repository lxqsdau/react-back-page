var merge = require('webpack-merge')
  , path = require('path')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './example/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    stats: { chunks: false },
    contentBase: './example',
    port: 5998,
    hot: true
  }
})