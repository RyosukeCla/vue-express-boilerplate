import express from 'express'
import routes from './routes'
import './lib/db'
// import path from 'paht'
// import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import http from 'http'
import socketIO from 'socket.io'
import promiseIO from 'promise.io/server'

export default (app) => {
  const server = http.createServer(app)
  const io = socketIO(server)

  // setup sockets
  promiseIO.use(io)
  require('./sockets')

  io.on('connection', (socket) => {
    socket.emit('s-emit', 'hi')
    socket.on('s-on', (mes) => {
      io.emit('s-emit', 'hello' + Math.random())
    })
  })

  io.on('connection', (socket) => {
    socket.emit('s-emit2', 'hi')
    socket.on('s-on2', (mes) => {
      io.emit('s-emit2', 'hello2' + Math.random())
    })
  })

  // set view engine
  app.set('view engine', 'pug')
  app.set('views', __views)

  // app.use(favicon(path.resolve(__static, 'image', 'favicon.ico')));
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())

  // set public assets
  app.use('/static', express.static(__static))
  app.use('/assets', express.static(__assets))

  // set routes
  for (const [key, route] of Object.entries(routes)) {
    app.use(key, route)
  }

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

  return server
}
