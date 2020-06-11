<template>
    <div class="recommend-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/recommendB"/>
            </div>

            <div class="main-title">
                The more you give. The more you get.
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
        </div>
    </div>
</template>

<script>
    import SimpleInput from "../../components/input/SimpleInput";
    import Button from "../../components/button/Button";
    import Header from "../../components/headers/Header";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'RecommendC',
        components: {SimpleInput, Button, Header, BackArrow}
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
                top: -9px;
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

            .main-title {
                margin-bottom: 48px;
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
                margin-top: 58px;
                margin-bottom:80px;
                width: 223px;
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