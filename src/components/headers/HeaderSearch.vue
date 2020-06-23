<template>
    <div class="header">
        <div class="header--group">
            <div class="logo">
                <img src="../../img/logo-mob.png" alt="">
            </div>
            <div class="search">
                <input :style="{width:width}" :placeholder="placeholder" class="input"/>
            </div>
            <div class="icon">
                <img :style="{left: iconLeft}" src="../../img/search.png" alt="">
            </div>
        </div>
        <div :style="{marginRight: menuRight}" class="header--menu">
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
            iconLeft : {
                type: String,
                default: '517px'
            },
            menuRight: {
                type: String,
                default: "139px"
            }
        }
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

        &--group {
            display: flex;
            position: relative;

            .logo {
                margin-left: 139px;
                margin-right: 25px;
                img {
                    width: 102px;
                    height: 26px;
                }
            }

            .search {

                .input {
                    width: 269px;
                    height: 30px;
                    border-radius: 5px;
                    box-shadow: 0 10px 114px 0 rgba(0, 0, 0, 0.05);
                    border: solid 2px #e8e8e8;
                    background-color: #ffffff;
                    padding-left: 17px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 9px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 12.5px;
                    letter-spacing: normal;
                    text-align: left;
                    color: rgba(110, 127, 170, 0.8);

                }
            }

            .icon {
                img{
                    position: absolute;
                    top: 8px;
                    left: 505px;
                }
            }
        }

        &--menu {
            margin-right: 139px;
        }
    }
</style>