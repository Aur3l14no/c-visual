const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: path.resolve(__dirname, 'src/blockly/blockly_compressed.js'),
      use: 'exports-loader?Blockly'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      Blockly: path.resolve(__dirname, 'src/blockly/blockly_compressed.js'),
      goog: path.resolve(__dirname, 'src/blockly/blockly_compressed.js')
    }),
    // new ClosurePlugin({
    //   mode: 'STANDARD',
    //   closureLibraryBase: path.resolve(__dirname, 'src/closure-library/closure/goog/base.js')
    // }, {
    //   // FLAGS
    // })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  mode: 'development'
};
