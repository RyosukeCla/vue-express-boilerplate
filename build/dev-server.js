const express = require('express')
const config = require('../config')
const app = express()

const webpack = require('webpack')
const webpackConfig = require('./webpack.client.config')
const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

const setup = require('../www/server.dev.js')
const server = setup(app)

server.listen(config.dev.admin.port)
