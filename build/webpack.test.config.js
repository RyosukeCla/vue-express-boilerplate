var webpack = require('webpack')
var baseConfig = require('./webpack.client.config')

var webpackTestConfig = {
  devtool: 'inline-source-map',
  module: baseConfig.module,
  output: baseConfig.output,
  resolve: baseConfig.resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
}

module.exports = webpackTestConfig
