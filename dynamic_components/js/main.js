new Vue({
    el: '#app',
    data: {
        currentView: 'square'
    },
    components: {
        square: {
            template: '#square-template'
        },
        triangle: {
            template: '#triangle-template'
        },
        krug: {
            template: '#krug-template'
        },
        ellips: {
            template: '#ellips-template'
        }
    },
    methods: {
        switchView: function (view) {
            this.currentView = view
        }
    }
});