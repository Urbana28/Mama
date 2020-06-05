<template>
    <div class="about-container">
        <div>
            <Header />
        </div>
        <div class="content">
            <div class="backArrow">
                <button>
                    <img src="../img/backbutton.png" alt="">
                </button>
            </div>
            <div class="text">
                <div class="text--main">About</div>
                <div class="text--second">
                    The Ultimate Guide to <br>
                    Ethnic Restaurants
                </div>
                <div class="text--subtitles">
                    <div class="info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper diam quis dolor blandit
                        elementum eget vel arcu.
                        In tincidunt at nibh a tempus.
                        Phasellus mollis lorem non nisl congue, vel rutrum ex euismod. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.gfdgdfgdgdfgd

                    </div>
                    <div class="info"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper diam quis
                        dolor blandit elementum eget vel arcu.
                        In tincidunt at nibh a tempus.
                        Phasellus mollis lorem non nisl congue, vel rutrum ex euismod. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.gddgdgfdgfgf

                    </div>
                </div>
            </div>
            <div class="buttons">
                <button v-on:click="gag()"><img src="../img/instagram.png" alt=""></button>
                <button v-on:click="gag()"><img src="../img/about-email.png" alt=""></button>
            </div>
        </div>
    </div>
</template>


<script>
    import Header from "../components/input/Header";
    export default {
        components: {Header},
        methods: {
            gag: () => {
                alert('clicked')
            }
        }
    }
</script>


<style scoped lang="scss">
    .about-container {
        width: 100%;
        height: 100%;
        @media screen and (max-width: 562px) {
            margin-top: 73px;
        }


        .content {
            position: relative;
            margin: 0 auto;
            @media screen and (max-width: 562px) {
                max-width: 462px;
            }

            .backArrow {
                position: absolute;
                top: -3px;
                left: 0;
                @media screen and (max-width: 562px) {
                   top: -3px;
                }
                button {
                    background: none;
                    outline: none;
                    border: none;
                    margin-left: 31px;
                    @media screen and (max-width: 562px) {
                        img {
                            height: 36px;
                            width: 21px;
                        }
                    }
                }
            }

            .text {
                margin-bottom: 166px;
                @media screen and (max-width: 562px) {
                    margin-bottom: 151px;

                }
                &--main {
                    margin-bottom: 33px;
                    font-size: 18px;
                    line-height: 23px;
                    color: #ffcc00;
                    font-weight: bold;
                    @media screen and (max-width: 562px) {
                        margin-bottom: 84px;
                        font-size: 30px;
                    }
                }

                &--second {
                    margin-bottom: 30px;
                    font-size: 18px;
                    line-height: 22.5px;
                    font-weight: 500;
                    color: #ffcc00;
                    @media screen and (max-width: 562px) {
                        margin-bottom: 84px;
                        font-size: 35px;
                        line-height: 40px;
                    }
                }

                &--subtitles {
                    text-align: left;
                    max-width: 426px;
                    margin: 0 auto;

                    .info {
                        margin-bottom: 16px;
                        color: #ffcc00;
                        font-size: 10.5px;
                        line-height: 12px;
                        @media screen and (max-width: 562px) {
                            margin-bottom: 50px;
                            font-size: 25px;
                            line-height: 34px;

                        }
                    }
                }
            }
        }

        .buttons {

            button {
                background: none;
                border: none;
                outline: none;
                @media screen and (max-width: 562px) {
                    img {
                        height: 61px;
                        width: 60px;
                    }
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }

    }
</style>

