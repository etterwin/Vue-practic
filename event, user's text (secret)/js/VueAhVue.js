var love = 'I love you';
var loveSlim = 'i love you';

new Vue ({
    el: "#app",
    data: {
        message: ''
    },
    methods: {
        onClick: function () {
            if(this.message === love || this.message === loveSlim) {
                alert('I love you too, honey')
            } if (this.message != love && this.message != loveSlim){
                alert(this.message)
            }

        }
    }
});

