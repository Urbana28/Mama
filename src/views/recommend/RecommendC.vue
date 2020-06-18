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
                            What is a restaurant
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
                <Button name="Recommendation"/>
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
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;


            .backArrow {
                position: absolute;
                top: 27px;
                left: 10px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px) {
                    top: 43px;
                    left: 0;
                }
                @media screen and (max-width: 320px) {
                    top: 43px;
                    left: 0;
                }
            }

            .main-title {
                margin-top: 34px;
                margin-bottom: 48px;
                font-family: 'Lato', sans-serif;
                font-size: 21px;
                font-weight: 400;
                line-height: 29.5px;
                text-align: center;
                color: #ffcc00;

                @media screen and (max-width: 470px){
                    margin-top: 120px;
                    margin-bottom: 100px;
                    width: 210px;
                    font-size: 22px;
                    line-height: 26.5px;
                }
                @media screen and (max-width: 320px){
                    margin-top: 90px;
                    width: 210px;
                    font-size: 20px;
                    line-height: 26.5px;
                }
            }

            .form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;


                .question-restaurant {
                    margin-bottom: 36px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .question {
                        margin-bottom: 10px;
                        font-family: 'Montserrat',sans-serif;
                        font-size: 18px;
                        font-weight: bold;
                        line-height: 23px;
                        text-align: center;
                        color: #ffcc00;
                    }

                    .field {
                        width: 300px;
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
                        font-family: "Montserrat", sans-serif;
                        font-size: 11.5px;
                    }

                   &--circle {
                        position: absolute;
                        top: 2.3px;
                        left: 3.3px;
                        border: 1px solid #ffcc00;
                        border-radius: 100%;
                        width: 12px;
                        height: 12px;
                    }

                    @media screen and (max-width: 414px) {
                        button {
                            font-size: 13px;
                        }

                        &--circle {
                            top: 3.5px;
                            left: 3.9px;
                        }
                    }
                    @media screen and (max-width: 320px) {
                        button {
                            font-size: 12px;
                        }

                        &--circle {
                            top: 2.3px;
                            left: 3.3px;
                        }
                    }
                }

                @media screen and (max-width: 414px){
                    width: 350px;
                    .question-restaurant {
                        margin-bottom: 45px;
                        .question {
                            font-size: 16.6px;
                        }
                        .field {
                            width: 300px;
                        }
                    }
                }
                @media screen and (max-width: 320px){
                    width: 310px;
                    .question-restaurant {
                        margin-bottom: 10px;
                        .question {
                            font-size: 14.6px;
                        }
                        .field {
                            width: 270px;
                        }
                    }
                }
            }

            &--btn {
                margin-bottom: 22px;
                width: 223px;

                @media screen and (max-width: 414px) {
                    margin-bottom: 32px;
                    width: 295px;
                }
                @media screen and (max-width: 320px) {
                    margin-bottom: 32px;
                    margin-top: 30px;
                    width: 250px;
                }
            }
        }
    }
</style>