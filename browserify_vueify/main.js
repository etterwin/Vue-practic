let Vue = require('vue');
let hello = require('./components/e.vue');

new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement('h1', 'Hello, ');
    }

});

