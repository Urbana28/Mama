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
            <div class="content--pic">
                <img src="../../img/MAMA_Fam.png" alt="">
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
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;

            .backArrow {
                position: absolute;
                top: 30px;
                left: 33px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px) {
                    top: 45px;
                    left: 0;
                }
            }

            .logo {
                display: none;

                @media screen and (max-width: 564px) {
                    display: block;
                    margin-top: 144px;
                    img {
                        height: 46px;
                        width: 177px;
                    }
                }
                @media screen and (max-width: 320px) {
                    display: block;
                    margin-top: 110px;
                    img {
                        height: 46px;
                        width: 177px;
                    }
                }
            }

            &--title {
                font-family: 'Lato', sans-serif;
                font-size: 22px;
                font-weight: 400;
                line-height: 26.5px;
                text-align: center;
                color: #ffcc00;
                margin-top: 34px;
                margin-bottom: 30px;

                @media screen and (max-width: 414px) {
                    width: 230px;
                    font-size: 23px;
                }
            }

            &--pic {
                margin-bottom: 30px;
            }

            &--button {
                width: 223px;

                @media screen and (max-width: 414px) {
                    width: 296px;
                }
                @media screen and (max-width: 320px) {
                    width: 260px;
                }
            }
        }

    }
</style>