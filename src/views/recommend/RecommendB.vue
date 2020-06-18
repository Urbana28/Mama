<template>
    <div class="recommend-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/recommendA"/>
            </div>
            <div class="main-title">
                Great!
            </div>
            <div class="flag">
                <img src="../../img/flag.png" alt="">
            </div>
            <div class="form">
                <div class="question-restaurant">
                    <div class="question">
                        <span>
                            What is a Chinese restaurant
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
            <div class="content--paginator">
                <img src="../../img/pagination-mob.png" alt="">
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
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;


            .backArrow {
                position: absolute;
                top: 21px;
                left: 32px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px) {
                    top: 45px;
                    left: 10px;
                }

                @media screen and (max-width: 320px){
                    top: 43px;
                    left: -12px;
                }
            }

            .flag {
                margin-bottom: 19px;

                img {
                    width: 56px;
                    height: 38px;
                }

                    @media screen and (max-width: 564px) {
                        margin-top: 0;
                        margin-bottom: 95px;

                        img {
                            height: 72px;
                            width: 110px;
                        }
                    }
                @media screen and (max-width: 320px) {
                    margin-top: 0;
                    margin-bottom: 65px;

                    img {
                        height: 60px;
                        width: 90px;
                    }
                }

            }

            .main-title {
                margin-top: 25px;
                margin-bottom: 23px;
                font-family: 'Lato', sans-serif;
                font-size: 21px;
                font-weight: 500;
                line-height: 29.5px;
                text-align: center;
                color: #ffcc00;

                @media screen and (max-width: 414px){
                    margin-bottom: 17px;
                    margin-top: 45px;
                }

                @media screen and (max-width: 320px){
                    margin-bottom: 15px;
                    margin-top: 45px;
                }
            }


            .form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 403px;

                .question-restaurant {
                    margin-bottom:25px;
                    .question {
                        margin-bottom: 10px;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 20px;
                        text-align: center;
                        color: #ffcc00;
                    }
                    .field {
                        width: 390px;
                    }
                }


                .add-btn {
                    position: relative;
                    margin-top: -18px;
                    text-align: center;
                    width: 100%;

                    button {
                        border: none;
                        outline: none;
                        background: none;
                        color: #ffcc00;
                        font-size: 12.5px;
                        font-family: "Montserrat", sans-serif;
                        font-weight: 400;
                    }

                    &--circle {
                        position: absolute;
                        top: 3.5px;
                        left: 131px;
                        border: 1px solid #ffcc00;
                        border-radius: 100%;
                        width: 12px;
                        height: 12px;
                    }

                    @media screen and (max-width: 414px) {
                        button {
                            font-size: 12px;
                        }

                        &--circle {
                            top: 3.5px;
                            left: 98.7px;
                        }
                    }
                    @media screen and (max-width: 320px) {
                        button {
                            font-size: 12px;
                        }

                        &--circle {
                            top: 3.5px;
                            left: 73.7px;
                        }
                    }
                }

                @media screen and (max-width: 414px){
                    width: 350px;
                    .question-restaurant {
                        margin-bottom: 45px;
                        width: 320px;
                        .question {
                            font-size: 16.6px;
                        }
                        .field {
                            width: 300px;
                        }
                    }
                }
                @media screen and (max-width: 375px){
                    width: 350px;
                    .question-restaurant {
                        margin-bottom: 25px;
                        width: 320px;
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
                        width: 270px;
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
                margin-top: 26px;
                margin-bottom: 30px;
                width: 223px;

                @media screen and (max-width: 414px) {
                    margin-top: 0;
                    margin-bottom: 85px;
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