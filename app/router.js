var Backbone = require('backbone');

var router = Backbone.Router.extend({
    routes: {
        '*sup': 'home'
    },
    initialize: function () {
    },
    home: function () {
        console.log('bu');
    }
});

module.exports = router;
