'use strict';
/**
 * babel hook to use es6
 */

require('babel-register')({
  presets: [ 'es2015' ]
});
require("babel-polyfill");
require('./app');