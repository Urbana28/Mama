<template>
    <div class="recommend-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/recommendA"/>
            </div>
            <div class="flag">
                <img src="../../img/flag.png" alt="">
            </div>
            <div class="main-title">
                Great!
            </div>
            <div class="form">
                <div class="question-restaurant">
                    <div class="question">
                        <span>
                            What is a Chinese restaurant <br>
                        you would recommend?
                        </span>
                    </div>
                    <div class="field">
                        <SimpleInput placeholder="Begin typing name restaurant "/>
                    </div>
                </div>
                <div class="question-restaurant">
                    <div class="question">
                        What dish would you recommend?
                    </div>
                    <div class="field">
                        <SimpleInput placeholder="Begin typing name of dish"/>
                    </div>
                    <div class="add-btn">
                        <div class="add-btn--circle"></div>
                        <button>+ Add Another Dish</button>
                    </div>
                </div>
            </div>
            <div class="content--btn">
                <Button name="Next"/>
            </div>
            <div class="content--paginator">
                <img src="../../img/pagination.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import SimpleInput from "../../components/input/SimpleInput";
    import Header from "../../components/headers/Header";
    import Button from "../../components/button/Button";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'RecommendB',
        components: {SimpleInput, Header, Button, BackArrow}
    }
</script>

<style scoped lang="scss">
    .recommend-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        .content {
            margin-top: 25px;
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
                    margin-bottom: 19px;

                    @media screen and (max-width: 562px) {
                        height: 95px;
                        width: 145px;
                    }
                }
            }

            .main-title {
                margin-bottom: 23px;
                font-family: CooperStd, sans-serif;
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 29.5px;
                letter-spacing: normal;
                text-align: center;
                color: #ffcc00;

            }


            .form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;



                .question-restaurant {
                    .question {
                        margin-bottom: 23px;
                        font-family: ProximaNova,sans-serif;
                        font-size: 18px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 23px;
                        letter-spacing: normal;
                        text-align: center;
                        color: #ffcc00;
                    }
                }


                .add-btn {
                    position: relative;
                    margin-top: -18px;
                    display: flex;
                    align-items: flex-start;

                    button {
                        border: none;
                        outline: none;
                        background: none;
                        color:  #ffcc00;
                    }

                    .add-btn--circle {
                        position: absolute;
                        top: 2.5px;
                        left: 3.5px;
                        border: 1px solid #ffcc00;
                        border-radius: 100%;
                        width: 12px;
                        height: 12px;
                    }
                }

                @media screen and (max-width: 440px) {
                    width: 100%;
                    max-width: 441px;
                    margin-bottom: 190px;
                }
                @media screen and (max-width: 320px) {
                    margin-bottom: 130px;
                }
            }

            &--btn {
                margin-top: 28px;
                margin-bottom: 22px;
                width: 223px;
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