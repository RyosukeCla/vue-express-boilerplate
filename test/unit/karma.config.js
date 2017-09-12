const path = require('path')
const webpackConfig = require('../../build/webpack.test.config.js')
const isDocker = require('is-docker')()

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'specs/**/*.spec.js',
      '../../src/client/**/*.js',
      '../../src/client/**/*.vue',
      '../../src/client/**/*.scss',
      '../../src/client/**/*.css',
      '../../src/lib/**/*.js'
    ],
    preprocessors: {
      'specs/**/*.spec.js': ['webpack', 'sourcemap'],
      '../../src/client/**/*.js': ['webpack', 'sourcemap'],
      '../../src/client/**/*.vue': ['webpack', 'sourcemap'],
      '../../src/client/**/*.scss': ['webpack', 'sourcemap'],
      '../../src/client/**/*.css': ['webpack', 'sourcemap'],
      '../../src/lib/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeCustom'],
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
        // more permissions than Docker allows by default)
        flags: isDocker ? ['--no-sandbox'] : []
      }
    },
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
}
