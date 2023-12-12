<script>
    import TheHeader from "./components/layout/TheHeader.vue";

    export default {
        components: {
            TheHeader,
        },
    };
</script>

<template>
    <TheHeader />
    <RouterView />
</template>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: hsl(0, 0%, 95%);
    }
</style>
