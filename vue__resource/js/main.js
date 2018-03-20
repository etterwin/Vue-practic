let Vue = require('vue');
let VueResource = require('vue-resource');
let Browser = require('../components/browser.vue');

Vue.use(VueResource);

new Vue({
    el: 'body',
    components: {
        Browser
    },
    data: {
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
    },
    methods: {
        getAllPosts: function () {
                
            this.$http.get(this.endpoint).then(function (responce) {
                console.log(responce);
            },
                function (error) {
                    //mistake
                })
        }
    },
    created: function () {
        this.getAllPosts();
    }
});