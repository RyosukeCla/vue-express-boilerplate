<template lang="pug">
  div
    div chat page with socket.io
    ul.messages
      li.message(v-for="message in chatStore.messages") {{message}}
    input(v-model="currentMessage")
    button(@click="submit") send
    div
      router-link(to="/") back
</template>
<script>
import ChatStore from '../stores/ChatStore'

export default {
  data () {
    return {
      chatStore: ChatStore.state,
      currentMessage: ''
    }
  },
  mounted () {
    ChatStore.init()
  },
  destroyed () {
    ChatStore.destroy()
  },
  methods: {
    submit () {
      ChatStore.submit(this.currentMessage)
      this.currentMessage = ''
    }
  }
}
</script>
<style lang="scss">
</style>
