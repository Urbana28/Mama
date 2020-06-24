<template>
    <div class="header">
        <div class="header--group">
            <div class="logo">
                <img src="../../img/logo-mob.png" alt="">
            </div>
            <div :style="{width:width}" class="search">
                <input v-on:change="callback($event.currentTarget.value)" :placeholder="placeholder" class="input"/>
            </div>
            <div class="icon">
                <img  src="../../img/search.png" alt="">
            </div>
        </div>
        <div  class="header--menu">
           <Menu />
        </div>
    </div>
</template>

<script>
    import Menu from "../menu/Menu";
    export default {
        name: 'HeaderSearch',
        components: {Menu},
        props:  {
            placeholder: String,
            width: {
                type: String,
                default: "269px"
            },
            callback: Function
        }
    }
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 59px;
        border-bottom: 2px solid #ffffff;

        @media screen and (max-width: 562px) {
            display: none;
        }

        &--group {
            display: flex;
            .logo {
                margin-left: 72px;
                margin-right: 162px;
                img {
                    width: 102px;
                    height: 26px;
                }
            }

            .search {
                width: 269px;
                position: relative;
                .input {
                    width: 100%;
                    height: 30px;
                    border-radius: 5px;
                    box-shadow: 0 10px 114px 0 rgba(0, 0, 0, 0.05);
                    border: solid 2px #e8e8e8;
                    background-color: #ffffff;
                    padding-left: 17px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 12px;
                    font-weight: normal;
                    line-height: 12.5px;
                    text-align: left;
                    color: black;
                    outline: none;

                    &::placeholder {
                        opacity: 1;
                        transition: .3s;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 12.5px;
                        text-align: left;
                        color: rgba(110, 127, 170, 0.8);
                    }

                    &:focus::placeholder {
                        transition: .3s;
                        opacity: 0;
                    }
                }
            }

            .icon {
                img{
                    position: absolute;
                    top: 22px;

                }
            }
        }
    }
</style>