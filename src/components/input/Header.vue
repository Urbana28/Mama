<template>
        <div class="header">
            <div class="header--logo">
                <img src="../../img/logo-mob.png" alt="">
            </div>
            <div class="header--menu"><img src="../../img/menu.png" alt=""></div>
        </div>
</template>

<script>
 export default {
     name: 'Header'
 }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 59px;
        border-bottom: 2px solid #ffffff;
        margin-bottom: 21px;
        @media screen and (max-width: 562px) {
            display: none;
        }

        &--logo {
            img {
                width: 102px;
                height: 26px;
            }
        }
    }
</style>