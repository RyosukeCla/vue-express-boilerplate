import Vue from 'vue'
import Router from 'vue-router'
import ChatPage from '../pages/ChatPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatPage',
      component: ChatPage
    }
  ]
})
