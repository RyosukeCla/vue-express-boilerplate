const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BabiliWebpackPlugin = require('babili-webpack-plugin')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: {
    server: [isProduction ? path.resolve(__dirname, '../src/server/main.js') : path.resolve(__dirname, '../src/server/main.dev.js')]
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: isProduction ? '[name].js' : '[name].dev.js',
    path: path.join(__dirname, '../www'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src/server/lib'),
      path.resolve(__dirname, '../src/lib')
    ]
  },
  target: 'node',
  node: {
    fs: "empty",
    module: "empty",
    net: "empty"
  },
  stats: {
    warnings: false
  },
  plugins: [
    new webpack.DefinePlugin({
      '__static': `"${path.resolve(__dirname, '../static')}"`
    }),
    new webpack.DefinePlugin({
      '__views': `"${path.resolve(__dirname, '../src/views')}"`
    }),
    new webpack.DefinePlugin({
      '__assets': `"${path.resolve(__dirname, '../assets')}"`
    })
  ]
}

if (isProduction) {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BabiliWebpackPlugin({
      removeConsole: true,
      removeDebugger: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
} else {
  webpackConfig.devtool = 'inline-source-map'
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  )
  // new webpack.HotModuleReplacementPlugin()
}

module.exports = webpackConfig
