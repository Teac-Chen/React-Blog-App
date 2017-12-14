const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new webpack.BannerPlugin('Teac所有，翻版必究（开个玩笑）'), // 为编译过后的文件添加一个注释头
  new ExtractTextPlugin({
    filename: (getPath) => {
      return getPath('css/[name].css')
    },
    allChunks: true
  }), // 分离css和js文件
  new webpack.optimize.OccurrenceOrderPlugin(), // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
  // new webpack.optimize.UglifyJsPlugin(), // 压缩JS代码
];

module.exports = {
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '../', "/bin/client/public/"),
    filename: "js/build-[name].js",
    chunkFilename: 'js/[id]-chunk-[name].js',
    publicPath: "/"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    }]
  },
  plugins: plugins
}