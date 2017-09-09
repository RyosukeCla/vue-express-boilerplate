import extension from './extension'

class Server {
  constructor () {
    this._io = null
  }

  use (io) {
    this._io = io
    extension.extend(this._io)
  }

  get io () {
    return this._io
  }

  of (namespace) {
    const namespacedIO = this._io.of(namespace)
    extension.extend(namespacedIO)
    return this.io.of(namespace)
  }
}

export default new Server()
