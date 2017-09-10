<template lang="pug">
  div#root-page
    h1.title Vue Express Boilerplate
    .body
      .features-col
        .features-row
          img.feature-item(src="/static/images/vue-logo.png")
          img.feature-item(src="/static/images/mongo.png")
          img.feature-item(src="/static/images/redis.png")
          img.feature-item(src="/static/images/webpack.png")
          img.feature-item(src="/static/images/socketio.png")
          img.feature-item(src="/static/images/eslint.png")
        .features-row
          img.feature-item(src="/static/images/docker.png")
          img.feature-item(src="/static/images/mocha.png")
          img.feature-item(src="/static/images/chai.png")
          img.feature-item(src="/static/images/express.png")
          .feature-item etc

      h3.section-title Github
      a(href="https://github.com/RyosukeCla/vue-express-boilerplate" target="_blank") Vue Express Boilerplate

      h3.section-title Examples
      router-link(to="/chat") chat

      h3.section-title References
      .features-col
        ul.features-row
          li
            a(href="https://vuejs.org/" target="_blank") vue
          li
            a(href="https://www.mongodb.com/" target="_blank") mongodb
          li
            a(href="https://redis.io/" target="_blank") redis
          li
            a(href="https://webpack.js.org/" target="_blank") webpack
          li
            a(href="https://socket.io/" target="_blank") socket.io
          li
            a(href="https://eslint.org/" target="_blank") eslint
        ul.features-row
          li
            a(href="https://www.docker.com/" target="_blank") docker
          li
            a(href="https://mochajs.org/" target="_blank") mocha
          li
            a(href="http://chaijs.com/" target="_blank") chai
          li
            a(href="https://expressjs.com/" target="_blank") express
          li
            a(href="http://www.nightmarejs.org/" target="_blank") nightmare
          li
            a(href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank") hot reload
        ul.features-row
          li
            a(href="https://pugjs.org/api/getting-started.html" target="_blank") pug
          li
            a(href="http://sass-lang.com/" target="_blank") scss
          li etc
          div
          div
          div

</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#root-page {
  max-width: 680px;
  margin: auto;
  text-align: center;
  -webkit-font-smoothing: antialiased;

  .title {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .section-title {
    margin-top: 30px;
  }

  .features-col {
    display: -webkit-flex; /* Safari */
    display: flex;
    -webkit-flex-direction: column; /* Safari */
    flex-direction:         column;
  }

  .features-row {
    margin-bottom: 20px;
    display: -webkit-flex; /* Safari */
    display: flex;
    -webkit-flex-direction: row; /* Safari */
    flex-direction:         row;
    -webkit-justify-content: space-around; /* Safari */
    justify-content:         space-around;
  }

  .feature-item {
    height: 50px;
  }
}

</style>
