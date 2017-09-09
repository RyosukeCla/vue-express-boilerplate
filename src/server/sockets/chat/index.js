import PromiseIO from 'promise.io/server'

const chat = PromiseIO.of('/chat')

chat.connection((socket) => {
  console.log('a new user connected')
  socket.receive('submit', (req, resolve, reject) => {
    chat.emit('message', req)
    resolve('success')
  })
})
