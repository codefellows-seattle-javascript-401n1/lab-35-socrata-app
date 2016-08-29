'use strict';

const webpack = require('webpack');

const extractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const apiURL = process.env.API_URL || 'https://data.seattle.gov/resource';

var plugins = [
  new extractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(apiURL)
  })
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: plugins,
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  postcss: function(){
    return [autoprefixer];
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: extractText.extract('style', 'css!postcss!resolve-url!sass?sourceMap!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]'
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.[ot]tf.*/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.eot.*/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
      }
    ]
  }
};
