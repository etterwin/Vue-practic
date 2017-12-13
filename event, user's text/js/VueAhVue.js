new Vue ({
    el: "#app",
    data: {
        message: ''
    },
    methods: {
        onClick: function () {
            alert(this.message)
        }
    }
});