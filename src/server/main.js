import express from 'express'
import setup from './setup'
import config from '../../config'

const isProduction = process.env.NODE_ENV === 'production'

const app = express()

const server = setup(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(isProduction ? config.prod.admin.port : config.dev.admin.port)
