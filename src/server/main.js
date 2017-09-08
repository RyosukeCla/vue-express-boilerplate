import express from 'express'
import setup from './setup'

const app = express()

setup(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
