module.exports = {
  admin: {
    port: 8080
  },
  redis: {
    host: 'localhost',
    port: '6379'
  },
  mongo: {
    port: 27017,
    // uri: 'localhost'
    uri: 'mongo',
    db: 'vue_express_boilerplate'
  }
}
