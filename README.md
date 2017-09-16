<p align="center">
  <a href="https://circleci.com/gh/RyosukeCla/vue-express-boilerplate/tree/master"><img src="https://circleci.com/gh/RyosukeCla/vue-express-boilerplate/tree/master.svg?style=shield" /></a>
  <a href="https://codeclimate.com/github/RyosukeCla/vue-express-boilerplate"><img src="https://codeclimate.com/github/RyosukeCla/vue-express-boilerplate.svg"/></a>
  <a href="https://github.com/RyosukeCla/vue-express-boilerplate/blob/master/LICENSE"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103"/></a>
  <img src="https://img.shields.io/badge/built%20with-%E2%9D%A4-ff69b4.svg" />
</p>
<p align="center">
  <img src="./docs/title.png" width="100%"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/es-2017-blue.svg"/>
  <a href="https://github.com/nodejs/node/tree/v8.4.0"><img src="https://img.shields.io/badge/node-v8.4.0-blue.svg"/></a>
  <a href="https://github.com/npm/npm/tree/v5.3.0"><img src="https://img.shields.io/badge/npm-v5.3.0-blue.svg"/></a>
  <a href="https://github.com/vuejs/vue/releases/tag/v2.4.2"><img src="https://img.shields.io/badge/vue-v2.4.2-brightgreen.svg"/></a>
  <a href="https://github.com/expressjs/express/releases/tag/4.15.4"><img src="https://img.shields.io/badge/express-v4.15.4-brightgreen.svg"/></a>
  <a href="https://github.com/webpack/webpack/releases/tag/v3.5.6"><img src="https://img.shields.io/badge/webpack-v3.5.6-brightgreen.svg"/></a>
</p>

| Common    | Frontend    | Backend     |
|:---------:|:-----------:|:-----------:|
| es2017    | vue 2.4     | express 4   |
| socket.io | vue-router 2| mongodb     |
| axios     | pug         | redis       |
| webpack 3 | scss        | nodemon     |
| eslint    | hot reload  |             |
| mocha     | nightmare   |             |
| docker    |||


## getting started
setup enviroment
```
$ git clone https://github.com/RyosukeCla/vue-express-boilerplate.git
$ cd vue-express-boilerplate
$ docker-compose up -d
$ docker-compose exec admin npm install
```
start to develop
```
$ docker-compose exec admin npm run dev
```

go to [localhost](http://localhost:8080)

## docs
- [promise.io api](./docs/promise.io.md)

# Detail
## setup
```
$ docker-compose up -d
$ docker-compose exec admin npm install
```

## develop
```
$ docker-compose exec admin npm run dev
```
go to [localhost](http://localhost:8080)

## e2e test
```
# You need to start server before e2e testing
$ docker-compose exec admin npm run dev
# or
$ docker-compose exec admin npm run start
```
```
$ docker-compose exec admin npm run test:e2e
```

## unit test
```
$ docker-compose exec admin npm run test:unit
```

## production
build for production
```
$ docker-compose exec admin npm run build
```

start server
```
$ docker-compose exec admin npm run start
```

stop server
```
$ docker-compose exec admin npm run stop
```
