let Vue = require('vue');
let hello = require('./components/e.vue');

new Vue({
   el: 'body',
    components: {
      hello: hello
    }
});