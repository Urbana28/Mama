<template>
    <div class="menu-container">
        <router-link to="/listMobile" class="btn">
            <img class="first-list" src="../../img/list-button.png" alt="">
            <img class="second-list" src="../../img/list-button-active.png" alt="">
            <span>The List</span>
        </router-link>
        <router-link to="/map" class="btn">
            <img class="first" src="../../img/map-button.png" alt="">
            <img class="second" src="../../img/map-button-active.png" alt="">
            Map
        </router-link>
        <button v-on:click="callback(true)" v-on:blur="callback(false)" class="btn">
            <img class="first" src="../../img/menu-button.png" alt="">
            <img class="second" src="../../img/menu-button-active.png" alt="">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'MenuMobile',
        props: {
            callback: Function
        }
    }
</script>

<style scoped lang="scss">
    .menu-container {
        background: white;
        height: 73px;
        width: 100%;
        display: flex;
        align-items: center;

        .btn {
            outline: none;
            border: none;
            background: none;
            text-decoration: none;
            position: relative;
            font-family: "Montserrat", sans-serif;
            font-size: 12px;
            color: rgba(139, 153, 189, .9);
            text-shadow: rgba(139, 153, 189, .9) 0 0 1px;
            padding-top: 34px;
            margin: 0 48px;

            .first {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 1;
                transition: .3s;
            }

            .second {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                transition: .3s;
            }

            .first-list {
                position: absolute;
                top: 3px;
                left: 9px;
                opacity: 1;
                transition: .3s;
            }
            .second-list {
                position: absolute;
                top: 3px;
                left: 9px;
                opacity: 0;
                transition: .3s;
            }
            &:hover, &:active, &:focus {
                cursor: pointer;
                color: #fecc2f;

                .first {
                    opacity: 0;
                    transition: .3s;
                }

                .second {
                    opacity: 1;
                    transition: .3s;
                }

                .first-list {
                    opacity: 0;
                    transition: .3s;
                }

                .second-list {
                    opacity: 1;
                    transition: .3s;
                }
            }
        }
    }
</style>