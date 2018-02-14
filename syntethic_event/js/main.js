Vue.component('message', {
    template: '<input class="field" v-model="message" @keyup.enter="saveMessage" placeholder="Enter some text..."/>',
    data: function () {
        return {
            message: ''
        }
    },
    methods: {
        saveMessage: function () {
            this.$emit('message-saved', this.message);

            this.message = '' //remove all symbols
        }
    }
});

new Vue({
    el: '#app',
    data: {
        messages: []
    },
    methods: {
        hadleMessage: function (message) {
            this.messages.push(message)
        }
    }
});