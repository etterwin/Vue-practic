var love = 'I love you';

new Vue ({
    el: "#app",
    data: {
        message: ''
    },
    methods: {
        onClick: function () {
            if(this.message === love) {
                alert('I love you too, honey')
            } if (this.message != love){
                alert(this.message)
            }

        }
    }
});

