// Karma configuration
// Generated on Fri May 26 2017 20:29:22 GMT-0700 (MST)

var webpackConfig = require('./webpack.config.coffee')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.min.js', // If a test includes jQuery, you must specify this here before the test file that will execute the jQuery statement(s)
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.coffee',
      'app/tests/**/*.test.cjsx',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/tests/**/*.test.coffee': ['webpack', 'sourcemap'],
      'app/tests/**/*.test.cjsx': ['webpack', 'sourcemap'],
   },

   client: {
      jasmine: {
         timeout: '5000'
      }
   },

   webpack: webpackConfig,
   webpackServer: {
      noInfo: true
   },








    // list of files to exclude
    exclude: [
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
