import extension from './extension'

class Client {
  constructor () {
    this._io = null
    this.option = {
      baseURL: ''
    }
  }

  use (io, option) {
    this._io = io
    if (option) {
      Object.assign(this.option, option)
    }
  }

  socket (namespace = '', option = {}) {
    const io = this._io(this.option.baseURL + namespace, option)
    extension.extend(io)
    return io
  }
}

export default new Client()
