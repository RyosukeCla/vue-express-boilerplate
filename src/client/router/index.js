import Vue from 'vue'
import Router from 'vue-router'
import RootPage from '../pages/RootPage'
import ChatPage from '../pages/ChatPage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RootPage',
      component: RootPage,
      meta: {root: true}
    },
    {
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage,
      meta: {title: 'Chat'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.root) {
    document.title = 'Vue Express Boilerplate'
  } else {
    document.title = to.meta.title + ' | Vue Express Boilerplate'
  }
  next()
})

export default router
