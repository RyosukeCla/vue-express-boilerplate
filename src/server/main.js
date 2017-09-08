import express from 'express'
import routes from './routes'
import './lib/db'

const app = express()

app.use('/static', express.static(__static))
app.use('/assets', express.static(__assets))

for (const [key, route] of Object.entries(routes)) {
  app.use(key, route)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
