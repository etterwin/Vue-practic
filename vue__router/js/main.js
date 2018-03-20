let Vue = require('vue');
let VueRouter = require('vue-router');

let Brands = require('./views/brands.vue');
let Contacts = require('./views/contacts.vue');
let Projects = require('./views/projects.vue');

Vue.use(VueRouter);

let router = new VueRouter({
   routes: [
       { path: '/brands', components: Brands },
       { path: '/contacts', components: Contacts },
       { path: '/projects', components: Projects }
   ]
});

new Vue({
    el: '#app',

});