<template lang="pug">
  div
    div chat page
    ul.messages
      li.message(v-for="message in chatStore.messages") {{message}}
    input(v-model="currentMessage")
    button(@click="submit") send
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
