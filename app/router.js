var router = Backbone.Router.extend({
    routes: {
        '/': 'home'
    },
    initialize: function () {
        Backbone.history.start({ pushState: true, root: '/' });
    },
    home: function () {
        print('hello');
        console.log('hello');
    }
});