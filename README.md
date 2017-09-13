<p align="center">
  <a href="https://circleci.com/gh/RyosukeCla/vue-express-boilerplate/tree/master"><img src="https://circleci.com/gh/RyosukeCla/vue-express-boilerplate/tree/master.svg?style=shield" /></a>
  <a href="https://github.com/RyosukeCla/vue-express-boilerplate/blob/master/LICENSE"><img src="https://badges.frapsoft.com/os/mit/mit.svg?v=103"/></a>
  <a href="https://codeclimate.com/github/RyosukeCla/vue-express-boilerplate"><img src="https://codeclimate.com/github/RyosukeCla/vue-express-boilerplate.svg"/></a>
  <img src="http://forthebadge.com/images/badges/built-with-love.svg" height="21"/>
</p>
<p align="center">
  <img src="./docs/title.png" width="100%"/>
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
