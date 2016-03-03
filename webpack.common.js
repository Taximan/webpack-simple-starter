var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var moduleLoaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
  },
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', 
    query: {
      presets: ['es2015']
    }
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  },
  {
    test: /\.html$/,
    loader: 'html'
  }
];

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    loaders: moduleLoaders
  }
};