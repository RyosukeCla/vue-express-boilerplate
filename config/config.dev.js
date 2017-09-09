module.exports = {
  admin: {
    port: 8080
  },
  redis: {
    port: 'localhost:6379'
  },
  mongo: {
    port: 27017,
    // uri: 'localhost'
    uri: 'mongo',
    db: 'vue_express_boilerplate'
  }
}
