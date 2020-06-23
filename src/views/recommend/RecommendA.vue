<template>
    <div class="recommend-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/homepage"/>
            </div>
            <div class="content--titles">
                <div class="main-title">
                    Great!
                </div>
                <div class="flag">
                    <img src="../../img/flag.png" alt="">
                </div>

            </div>
            <div class="form">
                <div class="question-title">
                    What is a Chinese restaurant
                    you would recommend?
                </div>
                <SimpleInput placeholder="Begin typing name restaurant"/>
            </div>
            <div class="content--paginator">
                <img src="../../img/pagination-mob.png" alt="">
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
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .backArrow {
                position: absolute;
                top: 24px;
                left: 32px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px){
                    top: 44px;
                    left: 10px;
                }
                @media screen and (max-width: 320px){
                    top: 31px;
                    left: 10px;
                }
            }



            &--titles {
                margin-top: 34px;
                .main-title {
                    font-family: 'Lato', sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 29.5px;
                    text-align: center;
                    color: #ffcc00;
                }

                .flag {
                    margin-top: 10px;
                    img {
                        width: 56px;
                        height: 38px;
                    }

                    @media screen and (max-width: 414px){
                        margin-top: 30px;
                        img {
                            width: 111px;
                            height: 74px;
                        }
                    }
                    @media screen and (max-width: 320px){
                        margin-top: 20px;
                        img {
                            width: 100px;
                            height: 63px;
                        }
                    }
                }


            }

            .form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 400px;

                .question-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 23px;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 10px;

                    @media screen and (max-width: 414px){
                        font-size: 16px;
                        line-height: 20px;
                        width: 278px;
                    }

                    @media screen and (max-width: 320px){
                        font-size: 16px;
                        line-height: 20px;
                        width: 278px;
                    }
                }

                @media screen and (max-width: 414px) {
                    width: 300px;
                }
                @media screen and (max-width: 320px) {
                    width: 270px;
                }
            }

            &--paginator {
                margin-bottom: 52px;
            }
        }
    }
</style>