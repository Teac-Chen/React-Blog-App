const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

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
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendors",
    filename: 'js/react.js',
    minChunks: 3,
  }), // 抽取出相同的模块，防止重复引入
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/client/front/views/front.ejs'),
    filename: path.join('../views/front.html'),
    favicon: path.join(__dirname, '/libs/favicon.ico'),
    chunks: ['front']
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/client/admin/admin.ejs'),
    filename: path.join('../views/admin.html'),
    favicon: path.join(__dirname, '/libs/favicon.ico'),
    chunks: ['vendors', 'admin']
  })
];

let files = glob.sync('./src/client/front/views/**/*.ejs');

files.map(file => {
  let extname = path.extname(file);
  let basename = path.basename(file, extname);
  let relative = path.relative('./src/client/front/views/', file);
  let dirname = path.dirname(relative);

  if(basename != 'front' && basename != 'admin'){
    let config = {
      template: path.join(file),
      filename: path.join(`../views/${dirname}/${basename}.html`),
      inject: false
    };

    plugins.push(new HtmlWebpackPlugin(config));
  }
})

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    front: path.join(__dirname, "/src/client/front/public/js/main.js"),
    admin: path.join(__dirname, "/src/client/admin/main.jsx"),
    vendors: ["react", "react-dom"]
  },
  output: {
    path: path.join(__dirname, "/bin/client/public/"),
    filename: "js/build-[name].js",
    chunkFilename: 'js/[id]-chunk-[name].js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000
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
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    },{
      test: /(\.ejs)$/,
      use: 'raw-loader'
    }]
  },
  plugins: plugins
}