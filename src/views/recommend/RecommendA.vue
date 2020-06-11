<template>
    <div class="recommend-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/homepage"/>
            </div>
            <div class="flag">
                <img src="../../img/flag.png" alt="">
            </div>
            <div class="content--titles">
                <div class="main-title">
                    Great!
                </div>
                <div class="question-title">
                    What is a Chinese restaurant <br>
                    you would recommend?
                </div>
            </div>
            <div class="form">
                <SimpleInput placeholder="Begin typing name restaurant"/>
            </div>
            <div class="content--paginator">
                <img src="../../img/pagination.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/headers/Header";
    import SimpleInput from "../../components/input/SimpleInput";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'RecommendA',
        components: {
            Header, SimpleInput, BackArrow}
    }
</script>

<style scoped lang="scss">
    .recommend-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        .content {
            margin-top: 34px;
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;


            .backArrow {
                position: absolute;
                top: 0;
                left: 33px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 562px) {
                    top: 10px;
                    left: 0;
                    button {
                        img {
                            width: 20px;
                            height: 34px;
                        }
                    }
                }
                @media screen and (max-width: 440px) {
                    top: 10px;
                    left: 0;
                    button {
                        img {
                            width: 17px;
                            height: 30px;
                        }
                    }
                }
            }

            .flag {
                img {
                    margin-top: 25px;
                    margin-bottom: 19px;

                    @media screen and (max-width: 562px) {
                        height: 95px;
                        width: 145px;
                    }
                }
            }

            &--titles {
                .main-title {
                    margin-bottom: 23px;
                    font-family: CooperStd, sans-serif;
                    font-size: 18px;
                    font-weight: 900;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 29.5px;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffcc00;

                    @media screen and (max-width:414px) {
                        margin-bottom: 50px;
                    }
                    @media screen and (max-width:360px) {
                        margin-bottom: 41px;
                    }
                    @media screen and (max-width:320px) {
                        margin-bottom: 29px;
                    }
                }

                .question-title {
                    font-family: ProximaNova, sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 23px;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffcc00;

                    @media screen and (max-width:414px) {
                        margin-bottom: 13px;
                    }
                    @media screen and (max-width:360px) {
                        font-size: 16px;
                        line-height: 21px;
                        margin-bottom: 0;
                    }
                }
            }

            .form {
                display: flex;
                margin-top: 23px;
                margin-bottom: 201px;

                @media screen and (max-width: 440px) {
                    width: 100%;
                    max-width: 441px;
                    margin-bottom: 190px;
                }
                @media screen and (max-width: 320px) {
                    margin-bottom: 130px;
                }
            }

            &--paginator {
                margin-bottom: 52px;
            }
        }


        @media screen and (max-width: 562px) {
            padding: 0 20px;
        }

        @media screen and (max-width: 440px) {
            padding: 0 30px;
        }
    }
</style>