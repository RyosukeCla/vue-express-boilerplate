# promise.io
promise.io is a library which extends socket.io. promise.io provides new methods to use `Promise`.
# server
## setup
```js
import express from 'express'
import http from 'http'
import socketIO from 'socket.io'
import PromiseIO from 'promise.io/server'

const app = express()
const server = http.createServer(app)
const io = socketIO(io)

PromiseIO.use(io) // done setup
```

## PromiseIO.io
return `io`
```js
const io = PromiseIO.io
```

## PromiseIO.of
return `io`
```js
const chat = PromiseIO.of('/chat')
```

## io.connection
use `io.connection` instead of `io.on('connection')` to use promise with socket.
```js
io.connection((socket) => {
  // do something with socket/io
})
```

## io.sendAsync / socket.sendAsync
return `Promise`
```js
socket.sendAsync(message, request).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

// you can use async/await syntax
async () => {
  try {
    const res = await io.sendAsync(message, request)
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
```

## io.receive / socket.receive
use `io.receive / socket.receive` instead of `io.on / socket.on` to use `io.sendAsync / socket.sendAsync`
```js
io.receive(message, (request, resolve, reject) => {
  resolve(res)
  // or
  reject(err)
})
```

# client
## setup
```js
import io from 'socket.io-client'
import PromiseIO from 'promise.io/client'

PromiseIO.use(io, [option]) // done setup
```

## PromiseIO.use
default option
```js
{
  baseURL: ''
}
```
```js
PromiseIO.use(io, {baseURL: 'http://localhost:8080'})
```

## PromiseIO.socket
```js
const socket = PromiseIO.socket([namespace = ''], [option = {}])
```

e.g.
```js
const socket = PromiseIO.socket('/chat', {forceNew: true})

// this is equals to =>
const socket = io(baseURL + '/chat', {forceNew: true})
```
