const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

let plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../', '/src/client/admin/admin.ejs'),
    filename: path.join('../views/admin.html'),
    favicon: path.join(__dirname, '../', '/libs/favicon.ico')
  })
];

module.exports = merge(baseConfig, {
  entry: {
    admin: path.join(__dirname, '../', "/src/client/admin/main.jsx")
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
        'views': path.resolve(__dirname, '../src/client/admin/views'),
        'styles': path.resolve(__dirname, '../src/client/admin/styles'),
        'routers': path.resolve(__dirname, '../src/client/admin/routers')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      exclude: /node_modules/
    },{
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
          plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]]
        }
      },
      exclude: /node_modules/
    },{
      test: /(\.ejs)$/,
      use: 'raw-loader'
    }]
  },
  plugins: plugins
})