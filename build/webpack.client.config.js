const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BabiliWebpackPlugin = require('babili-webpack-plugin')
const webpack = require('webpack')
const packageJson = require('../package.json')

const isProduction = process.env.NODE_ENV === 'production'

const webpackClientConfig = {
  entry: {
    app: [path.resolve(__dirname, '../src/client/main.js')]
  },
  externals: [
    ...Object.keys(packageJson.dependencies || {}).filter(d => !packageJson.whiteListedModules.includes(d))
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
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
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin
        .extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', query: { modules: false, sourceMaps: !isProduction}},
            {loader: 'sass-loader?indentedSyntax=1', query: { sourceMaps: !isProduction}}
          ]
        })
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: process.env.NODE_ENV === 'production',
            loaders: {
              sass: isProduction ? ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader?indentedSyntax=1',
                fallback: 'vue-style-loader'
              }) : 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: isProduction ? ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'vue-style-loader'
              }) : 'vue-style-loader!css-loader!sass-loader'
            }
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: isProduction ? '[name].prod.js' : '[name].dev.js',
    path: path.resolve(__dirname, '../assets'),
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.scss','.node'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src/client'),
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src/lib')
    ]
  },
  stats: {
    warnings: false
  },
  target: 'web',
  plugins: [
    new ExtractTextPlugin({
      filename: isProduction ? 'app.prod.css' : 'app.dev.css'
    })
  ]
}

if (isProduction) {
  webpackClientConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BabiliWebpackPlugin({
      removeConsole: true,
      removeDebugger: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  webpackClientConfig.entry.app.unshift('webpack-hot-middleware/client')
  webpackClientConfig.devtool = 'inline-source-map'
  webpackClientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  )
}

module.exports = webpackClientConfig
