<template>
    <div class="splash-container">
        <div class="header">
            <router-link to="/about">About</router-link> |
            <router-link to="#">Join Waitlist</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
        <router-view/>
        <div class="content">
            <img src="../../img/body.png" alt="">
        </div>
        <div class="button">
            <a href="https://www.instagram.com"><img src="../../img/instagram.png" alt=""></a>
        </div>
    </div>
</template>

<script>



 export default {
     name: 'Intro',
     components: {
     }
 }
</script>

<style scoped lang="scss">
    .splash-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        .header {


            margin-bottom: 23px;
            color: #ffd800;
            font-family: "Montserrat", sans-serif;

            a {
                text-decoration: none;
                color: #ffd800;
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                font-size: 10.5px;

                @media screen and (min-width: 320px) {
                    font-size: 14.5px;
                }
            }

        }

        .content {
            img {
                width: 111px;
                height: 390px;
            }
        }

        .button {
            margin-top: 20px;
        }
    }
</style>