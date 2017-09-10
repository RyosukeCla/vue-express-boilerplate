# Vue Express Boilerplate

Full featured boilerplate

| Common    | Frontend    | Backend     |
|:---------:|:-----------:|:-----------:|
| es2017    | vue 2.4     | express 4   |
| socket.io | vue-router 2| mongodb     |
| axios     | pug         | redis       |
| webpack 3 | scss        | nodemon     |
| eslint    | hot reload  |             |
| mocha     | nightmare   |             |
| docker    |||

- [promise.io api](./docs/promise.io.md)

## setup
```
$ docker-compose up -d
$ docker-compose exec admin bash
$ npm i
```

## develop
```
$ docker-compose exec admin bash
$ npm run test:e2e
```

## e2e-test
```
$ docker-compose exec admin bash
$ docker
```

## production
```
$ docker-compose exec admin bash
$ cd app
$ npm run build
```
