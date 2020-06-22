<template>
    <div class="container">
        <Homepage v-if="width > 414" />
        <ListMobile v-if="width <= 414" />
    </div>
</template>

<script>
    import Homepage from "./Homepage";
    import ListMobile from "./ListMobile";
    export default {
        components: {ListMobile, Homepage},
        data () {
            return {
                width: null
            }
        },
        mounted () {
            this.width = window.innerWidth


        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
    }
</style>