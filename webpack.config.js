var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var paths = require('./paths');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    'main': './index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: path.join(__dirname, 'static'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
        {
            test: /.js?$/,
            loader: 'react-hot',
            include: path.join(__dirname, 'src')
        },
        {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },

        {
            test: /.scss$/,
            loaders: ['style', 'css', 'sass']
        }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('main', paths),
    new webpack.HotModuleReplacementPlugin()
  ]
}
