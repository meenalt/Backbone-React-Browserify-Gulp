/* globals window */

// Libs
var jquery = require('jquery');
var lodash = require('lodash');
var backbone = require('backbone');

// Make sure Backbone's jQuery is the one loaded before
backbone.$ = jquery;
window.Backbone = backbone;
window._ = lodash;
