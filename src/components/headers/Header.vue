<template>
        <div class="header">
            <div class="header--logo">
                <img src="../../img/logo-mob.png" alt="">
            </div>
            <div class="header--menu">
            <Menu/>
            </div>
        </div>
</template>

<script>


 import Menu from "../menu/Menu";

 export default {
     name: 'Header',
     components: {Menu}
 }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 59px;
        border-bottom: 2px solid #ffffff;

         @media screen and (max-width: 562px) {
            display: none;
        }

        &--logo {
            margin-left: 139px;
            img {
                width: 102px;
                height: 26px;
            }
        }

        &--menu {
            margin-right: 139px;
        }
    }
</style>