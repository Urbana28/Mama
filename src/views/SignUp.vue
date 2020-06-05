<template>
    <div class="signUp-container">
        <div>
            <Header />
        </div>
        <div>
            <div class="content">
                <div class="backArrow">
                    <button>
                        <img src="../img/backbutton.png" alt="">
                    </button>
                </div>
                <div class="logo">
                    <img src="../img/logo-mob.png" alt="">
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
                <div class="content--paginator">
                    <img src="../img/pagination.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/input/Header";
    import Button from "../components/button/Button";
    export default {
        name: 'SignUp',
        components: {Button, Header}
    }
</script>

<style scoped lang="scss">
    .signUp-container {
        width: 100%;
        height: 100%;
        @media screen and (max-width: 562px) {
            margin-top: 71px;
        }

        .content {
            margin-top: 34px;
            position: relative;
            @media screen and (max-width: 562px) {
               width: 445px;

            }

            .backArrow {
                position: absolute;
                top: 0;
                left: 0;
                button {
                    background: none;
                    outline: none;
                    border: none;
                }
            }

            .logo {
                display: none;
                @media screen and (max-width: 562px) {
                    display: block;
                    img {
                        width: 263px;
                        height: 67px;
                        margin-top: 110px;
                    }
                }
            }

            &--title {
                margin-bottom: 46px;
                font-size: 18px;
                line-height: 22.5px;
                color: #ffcc00;
                @media screen and (max-width: 562px) {
                    max-width: 429px;
                    margin-top: 99px;
                    margin-bottom: 134px;
                    font-size: 31.5px;
                    line-height: 36px;
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
            }
            &--paginator {
                margin-top: 183px;
            }
        }
    }
</style>