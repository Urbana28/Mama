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
                <div class="question-title">
                    What is a Chinese restaurant
                    you would recommend?
                </div>
            </div>
            <div class="form">
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
                    margin-bottom: 10px;
                    font-family: 'Lato', sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 29.5px;
                    text-align: center;
                    color: #ffcc00;

                    @media screen and (max-width: 414px){
                        margin-bottom: 73px;
                    }
                    @media screen and (max-width: 320px){
                        margin-bottom: 45px;
                    }
                }

                .flag {
                    margin-bottom: 59px;
                    img {
                        width: 56px;
                        height: 38px;
                    }

                    @media screen and (max-width: 414px){
                        margin-top: 68px;
                        img {
                            width: 111px;
                            height: 74px;
                        }
                    }
                    @media screen and (max-width: 320px){
                        margin-top: 68px;
                        img {
                            width: 100px;
                            height: 63px;
                        }
                    }
                }

                .question-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 23px;
                    text-align: center;
                    color: #ffcc00;

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
            }

            .form {
                display: flex;
                margin-top: 5px;
                margin-bottom: 201px;
                width: 400px;

                @media screen and (max-width: 414px) {
                    width: 300px;
                    margin-bottom: 180px;
                }
                @media screen and (max-width: 320px) {
                    width: 270px;
                    margin-bottom: 140px;
                }
            }

            &--paginator {
                margin-bottom: 52px;
            }
        }
    }
</style>