<template>
    <div class="container">
        <div class="logo">
            <img class="logo--desk" src="../img/logo.png" alt="">
            <img class="logo--mob" src="../img/logo-mob.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .logo {

            &--mob {
                display: none;
            }

            @media screen and (max-width: 562px) {
                &--desk {
                    display: none;
                }
                &--mob {
                    display: block;
                }
            }

        }
    }

</style>