var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');


var router = Backbone.Router.extend({
    routes: {
        '': 'home'
    },
    initialize: function () {
    },
    home: function () {
        var view = require('./views/home.jsx');
        React.renderComponent(view(), $('#content')[0]);
    }
});

module.exports = router;
