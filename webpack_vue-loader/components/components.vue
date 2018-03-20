<template>
    <h1>{{ greeting }}<b>{{ naming }}</b></h1>
</template>

<script>
    module.export = {
        data: function () {
            return {
                greeting: 'Hello, ',
                naming: 'Webpack!'
            }
        }
    }
</script>

<style>
    body {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: white;
    }

    h1 {
        font-family: 'Roboto Condensed', sans-serif;
        color: #191919;
    }
</style>