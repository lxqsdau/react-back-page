var path = require('path')
  , fs = require('fs')
  , ExtractTextPlugin = require('extract-text-webpack-plugin') // 抽离出css文件

module.exports = {
  module: {
    //加载器配置
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract([
          // 'style-loader', 将 .css .scss 文件写到 index.html 的 head.<style></style> 标签中.
          'css-loader',
          'sass-loader'
        ])
      }, {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /dist/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc'))),
            },
          },
          'eslint-loader'
        ]
      }, {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[ext]',
              publicPath: './'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      'react': path.join(__dirname, '../node_modules', 'react'),
    },
    extensions: ['.js', '.jsx']
  }
}