<template>
    <div class="container">
        <div id="nav">
            <router-link to="/about">About</router-link> |
            <router-link to="/join">Join Waitist</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped lang="scss">
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>