import PromiseIO from 'promise.io/client'

class ChatStore {
  constructor () {
    this.chat = null
    this.state = {
      messages: null
    }
  }

  init () {
    this.chat = PromiseIO.socket('/chat')
    this.state.messages = []
    this.chat.on('message', (message) => {
      this.state.messages.push(message)
    })
  }

  submit (message) {
    this.chat.sendAsync('submit', message)
  }
}

export default new ChatStore()
