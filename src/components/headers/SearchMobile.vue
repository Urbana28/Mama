<template>
    <div class="search-container">
        <div class="btn-search" :style="{left:btnLeft}"><button><img src="../../img/search.png" alt=""></button></div>
        <input v-on:change="callback($event.currentTarget.value)" placeholder="Ask MAMA"/>
        <div class="btn-filter" :style="{right:btnRight}"><button v-on:click="filterHandler(true)"><img src="../../img/filter-mob.png" alt=""></button></div>
    </div>
</template>

<script>
    export default {
        name : 'SearchMobile',
        props: {

            callback : Function,
            filterHandler: Function
        }
    }
</script>

<style scoped lang="scss">
    .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;

        .btn-search {
            position: absolute;
            left: 5px;
            button {
                outline: none;
                background: none;
                border: none;
                img {
                    height: 18px;
                    width: 18px;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .btn-filter {
            position: absolute;
            right: 15px;
            button {
                outline: none;
                background: none;
                border: none;

                &:hover {
                    cursor: pointer;
                }
            }
        }
        input {
            width: 329px;
            height: 49px;
            border-radius: 10px;
            border: 2px solid #e8e8e8;
            box-shadow: 0 10px 114px 0 rgba(0, 0, 0, 0.05);
            outline: none;
            padding-left: 40px;
            font-family: "Montserrat", sans-serif;
            font-size: 16px;

            &::placeholder {
                color: #8a98ba;
                opacity: 1;
                transition: .3s;
                font-family: "Montserrat", sans-serif;
                font-size: 16px;
            }

            &:focus::placeholder {
                transition: .3s;
                opacity: 0;
            }
        }
    }
</style>