const path = require('path')
const webpackConfig = require('../../build/webpack.test.config.js')
const isDocker = require('is-docker')()

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'unit/**/*.spec.js'
    ],
    preprocessors: {
      'unit/**/*.spec.js': ['webpack', 'sourcemap']
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
