<template>
    <div class="backArrow-container">
        <router-link :to="{path}">
            <img src="../../img/backbutton.png" alt="">
        </router-link>
    </div>

</template>

<script>
    export default {
        name: 'BackArrow',
        props: {
            path: String
        }
    }
</script>

<style scoped lang="scss">
    .backArrow-container {
        a {
            background: none;
            outline: none;
            border: none;
            margin-left: 31px;

            @media screen and (max-width: 414px) {
                img {
                    height: 27px;
                    width: 18px;
                }
            }
        }
    }
</style>