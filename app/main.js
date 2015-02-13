var Router = require('./router');
var Backbone = require('backbone');
var jquery = require('jquery');
Backbone.$ = jquery;


var appStart = new Router();
Backbone.history.start({ pushState: true, root: '/' });
