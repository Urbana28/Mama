<template>
    <div class="about-container">
        <div>
            <Header />
        </div>
        <div class="content">
            <div class="backArrow">
               <BackArrow path="/intro"/>
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
                    <div class="info">
                        Aliquam a massa eu lectus interdum eleifend nec a libero. Aenean semper ipsum nec congue molestie. Pellentesque finibus, tellus at commodo convallis, ex purus lacinia dui, non condimentum libero neque eu ipsum. Sed fermentum sed nisl lacinia consequat. Phasellus et tincidunt lectus, vitae mattis elit.
                    </div>
                </div>
            </div>
            <div class="buttons">
                <a href="https://www.instagram.com"><img src="../../img/instagram.png" alt=""></a>
                <a href="https://www.google.com"><img src="../../img/about-email.png" alt=""></a>
            </div>
        </div>
    </div>
</template>


<script>
    import Header from "../../components/headers/Header";
    import BackArrow from "../../components/button/BackArrow";
    export default {
        components: {Header, BackArrow},
    }
</script>


<style scoped lang="scss">
    .about-container {
        width: 100%;
        height: 100%;
        position: relative;
        @media screen and (max-width: 562px) {
            margin-top: 73px;
        }


        .content {
            display: flex;
            flex-direction: column;
            position: relative;
            margin: 0 auto;
            @media screen and (max-width: 562px) {
                width: 82.206%;

            }

            .backArrow {
                position: absolute;
                top: 26px;
                left: 0;
                @media screen and (max-width: 562px) {
                    top: 3px;
                }
            }

            .text {
                margin-top: 21px;
                margin-bottom: 131px;
                @media screen and (max-width: 562px) {
                    margin-bottom: 151px;

                }
                &--main {
                    margin-bottom: 32px;
                    font-size: 18px;
                    font-family: 'Montserrat', sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    font-stretch: normal;
                    font-weight: 700;
                    line-height: 23px;
                    color: #ffcc00;

                    @media screen and (max-width: 562px) {
                        margin-bottom: 84px;
                        font-size: 30px;
                    }
                }

                &--second {
                    margin-bottom: 30px;
                    font-size: 18px;
                    font-family: Lato, sans-serif;
                    line-height: 22.5px;
                    font-weight: bold;
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
                        font-family: 'Montserrat', sans-serif;
                        font-stretch: normal;
                        font-weight: 400;
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
            margin-bottom: 38px;
            a {

                @media screen and (max-width: 562px) {
                    img {
                        height: 61px;
                        width: 60px;
                    }
                }

                img {
                    margin-right: 9px;
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }

    }
</style>

