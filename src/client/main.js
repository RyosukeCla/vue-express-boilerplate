import socketIO from 'socket.io-client'
import PromiseIO from 'promise.io/client'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/index.scss'

PromiseIO.use(socketIO, {baseURL: 'http://localhost:8080'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
