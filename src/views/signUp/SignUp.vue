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

            <div class="inner">
                <div class="logo">
                    <img src="../../img/logo-mob.png" alt="">
                </div>
                <div class="title">
                    Way to go–you just made your first recommendation!<br>
                    Access to our master list is just around the corner.
                </div>
                <div class="buttons">
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
                <img src="../../img/pagination-mob.png" alt="">
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
            width: 100%;
            justify-content: space-around;

            .backArrow {
                position: absolute;
                top: 0;
                left: 33px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }
                @media screen and (max-width: 414px) {
                    top: 60px;
                    left: 10px;
                    button {
                        img {
                            width: 20px;
                            height: 34px;
                        }
                    }
                }
                @media screen and (max-width: 320px) {
                    top: 30px;
                    left: 5px;
                }
            }

            .inner {
                display: flex;
                flex-direction: column;
                align-items: center;

                .logo {
                    display: none;
                    margin-bottom: 20px;

                    @media screen and (max-width: 414px) {
                        display: block;
                        img {
                            width: 177px;
                            height: 45px;
                        }
                    }
                }

                .title {
                    margin-bottom: 46px;
                    font-family: "Lato", sans-serif;
                    color: #ffcc00;
                    font-size: 18px;
                    line-height: 22.5px;

                    @media screen and (max-width: 565px) {
                        width: 410px;
                    }

                    @media screen and (max-width: 414px) {
                        font-size: 21px;
                        line-height: 24px;
                        width: 268px;
                        margin: 0 auto 93px;
                    }

                    @media screen and (max-width: 320px){
                        font-size: 20px;
                        line-height: 22px;
                        margin: 0 auto 60px;
                    }
                }

                .buttons {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 223px;

                    .btn {
                        margin-bottom: 15px;
                        width: 100%;
                    }

                    @media screen and (max-width: 414px) {
                        width: 300px;
                        .btn {
                            width: 100%;
                        }
                    }

                    @media screen and (max-width: 320px){
                        width: 263px;
                    }
                }
            }


            @media screen and (max-width: 414px){
                margin-top: 0;
            }
        }

    }
</style>