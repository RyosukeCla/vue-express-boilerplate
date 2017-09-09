const setSendAsync = (target) => {
  /**
   * sendAsync
   * @arg {string} message event name
   * @arg {Object} request request object
   */
  target.sendAsync = (message, request) => {
    return new Promise((resolve, reject) => {
      target.emit(message, request, (err, result) => {
        if (err) return reject(err)
        else return resolve(result)
      })
    })
  }
}

const setReceive = (target) => {
  /**
   * receive
   * @arg {string} message event name
   * @arg {Function<request, resolve(result), reject(error)>} callback
   * - @arg {Object} request request sended by client side
   * - @arg {Function} resolve send result to client side
   *   - @arg {Object} result
   * - @arg {Function} reject send error to client side
   *   - @arg {Error} error
   */
  target.receive = (message, callback) => {
    target.on(message, (request, fn) => {
      callback(
        request,
        (res) => {
          fn(null, res)
        },
        (err) => {
          fn(err, null)
        }
      )
    })
  }
}

const setConnection = (target) => {
  /**
   * connection
   * @arg {Function} onConnection
   * @desc this is a substitution for io.on('connection', onConnection)
   */
  target.connection = (onConnection) => {
    target.on('connection', (socket) => {
      setSendAsync(socket)
      setReceive(socket)
      onConnection(socket)
    })
  }
}

export default {
  extend (target) {
    setSendAsync(target)
    setReceive(target)
    setConnection(target)
  }
}
