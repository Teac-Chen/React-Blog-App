const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

let plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../', '/src/client/front/views/front.ejs'),
    filename: path.join('../views/front.html'),
    favicon: path.join(__dirname, '../', '/libs/favicon.ico')
  })
];

let files = glob.sync('./src/client/front/views/**/*.ejs');

files.map(file => {
  let extname = path.extname(file);
  let basename = path.basename(file, extname);
  let relative = path.relative('./src/client/front/views/', file);
  let dirname = path.dirname(relative);

  if(basename != 'front'){
    let config = {
      template: path.join(file),
      filename: path.join(`../views/${dirname}/${basename}.html`),
      inject: false
    };

    plugins.push(new HtmlWebpackPlugin(config));
  }
})

module.exports = merge(baseConfig, {
  entry: {
    front: path.join(__dirname, '../', "/src/client/front/public/js/main.js")
  },
  resolve: {
    extensions: ['.js', '.json']
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
      test: /(\.ejs)$/,
      use: 'raw-loader'
    }]
  },
  plugins: plugins
})