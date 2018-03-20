let Vue = require('vue/dist/vue.js');
let hello = require('vue-loader!./components/components.vue');

new Vue({
    el: 'body',
    components: {
        hello: hello
    }
});