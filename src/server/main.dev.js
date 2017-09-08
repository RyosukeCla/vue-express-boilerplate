const express = require('express')
const routes = require('./routes').default
require('./lib/db')

module.exports = (app) => {
  app.set('view engine', 'pug')
  app.set('views', __views)

  app.use('/static', express.static(__static))
  app.use('/assets', express.static(__assets))

  for (const [key, route] of Object.entries(routes)) {
    app.use(key, route)
  }

  app.get('/', (req, res) => {
    res.send('Hello, World!!')
  })

  app.get('/test', (req, res) => {
    res.render('index')
  })
}
