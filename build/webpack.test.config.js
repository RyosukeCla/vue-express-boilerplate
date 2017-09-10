var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.client.confif')

delete baseConfig.plugins
delete baseConfig.entry

var webpackTestConfig = merge(baseConfig, {
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
})

module.exports = webpackTestConfig
