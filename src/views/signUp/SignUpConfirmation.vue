<template>
    <div class="signUp-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
               <BackArrow path="#"/>
            </div>

            <div class="logo">
                <img src="../../img/logo-mob.png" alt="">
            </div>
            <div class="content--title">
                Congrats!<br>
                Welcome to the family.
            </div>
            <div class="content--button">
                <Button path="/homepage" name="Go to the list"/>
            </div>
        </div>
    </div>
</template>


<script>
    import Header from "../../components/headers/Header";
    import Button from "../../components/button/Button";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'SignUpConfirmation',
        components: {BackArrow, Button, Header}
    }
</script>

<style scoped lang="scss">
    .signUp-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        position: relative;

        .content {
            margin-top: 34px;
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;


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
                    top: 40px;
                    left: 3px;
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

            .logo {
                display: none;

                @media screen and (max-width: 562px) {
                    display: block;
                    margin-bottom: 99px;
                    margin-top: 90px;
                    img {
                        width: 263px;
                        height: 67px;
                    }
                }
                @media screen and (max-width: 370px) {
                    display: block;
                    margin-bottom: 99px;
                    margin-top: 90px;
                    img {
                        width: 203px;
                        height: 53px;
                    }
                }
            }

            &--title {
                font-family: CooperStd, sans-serif;
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 22.5px;
                letter-spacing: normal;
                text-align: center;
                color: #ffcc00;

                @media screen and (max-width: 562px) {
                    font-size: 31.5px;
                    line-height: 36px;
                    margin: 0 auto;
                }
                @media screen and (max-width: 440px) {
                    font-size: 27px;
                }
            }

            &--button {
                    width: 223px;
                    margin: 91px auto 284px;
                    font-size: 12px;

                @media screen and (max-width: 562px) {
                    margin-top: 134px;
                    margin-bottom: 100px;
                    width: 100%;
                }
                @media screen and (max-width: 440px) {
                    margin-top: 134px;
                    margin-bottom: 90px;
                    width: 100%;
                }
                @media screen and (max-width: 370px) {
                    margin-top: 104px;
                    margin-bottom: 80px;
                    width: 100%;
                }
            }
        }


        @media screen and (max-width: 562px) {
            padding: 0 50px;
            margin-bottom: 113px;
        }
        @media screen and (max-width: 440px) {
            padding: 0 30px;
            margin-bottom: 113px;
        }
    }
</style>