<template>
    <div class="signUp-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <button>
                    <img src="../../img/backbutton.png" alt="">
                </button>
            </div>
            <div>
                <div class="logo">
                    <img src="../../img/logo-mob.png" alt="">
                </div>
                <div class="content--title">
                    Way to go–you just made your first recommendation!<br>
                    Access to our master list is just around the corner.
                </div>
                <div class="content--buttons">
                    <div class="btn">
                        <Button name="Sign-up via Gmail"/>
                    </div>
                    <div class="btn">
                        <Button name="Sign-up via Facebook"/>
                    </div>
                    <div class="btn">
                        <Button name="Sign-up via Phone Number"/>
                    </div>
                </div>
            </div>
            <div class="content--paginator">
                <img src="../../img/pagination.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/headers/Header";
    import Button from "../../components/button/Button";

    export default {
        name: 'SignUp',
        components: {Button, Header}
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
                    top: 70px;
                    left: 33px;
                    button {
                        img {
                            width: 20px;
                            height: 34px;
                        }
                    }
                }
            }

            .logo {
                display: none;

                @media screen and (max-width: 562px) {
                    display: block;
                    margin-bottom: 99px;
                    margin-top: 215px;
                    img {
                        width: 263px;
                        height: 67px;
                    }
                }
            }

            &--title {
                margin-bottom: 46px;
                font-size: 18px;
                line-height: 22.5px;
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

            &--buttons {
                display: flex;
                flex-direction: column;
                align-items: center;

                .btn {
                    margin-bottom: 15px;
                    width: 223px;
                }

                @media screen and (max-width: 562px) {
                    margin-top: 134px;
                    margin-bottom: 185px;
                    width: 100%;

                    .btn {
                        width: 100%;
                    }
                }
            }

            &--paginator {
                margin-bottom: 50px;
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