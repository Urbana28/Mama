<template>
    <div class="welcome-container">
        <div>
            <Header />
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/ethnicity"/>
            </div>
            <div class="inner">
                <div class="logo">
                    <img src="../../img/logo-mob.png" alt="">
                </div>
                <div class="title">
                    Welcome! <br> You have good taste & <br> we trust your judgement.
                </div>
                <div class="pic">
                    <img src="../../img/MAMA_Fam.png" alt="">
                </div>
                <div class="btn">
                    <Button name="Let's get started"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/headers/Header";
    import BackArrow from "../../components/button/BackArrow";
    import Button from "../../components/button/Button";
    export default {
        name: 'Welcome',
        components: {Button, Header, BackArrow}
    }
</script>

<style scoped lang="scss">
    .welcome-container {
        width: 100%;
        display: flex;
        flex-direction: column;
       position: relative;

        .content {
            width: 100%;
            position: relative;

            .backArrow {
                position: absolute;
                top: 20px;
                left: 18px;

                @media screen and (max-width: 562px){
                    top: 44px;
                    left: 20px;
                }
                @media screen and (max-width: 320px){
                    top: 34px;
                    left: 0;
                }
            }

            .inner {
                display: flex;
                flex-direction: column;
                align-items: center;

                .logo {
                    display: none;

                    @media screen and (max-width: 562px){
                        display: block;
                        img {
                            height: 44px;
                            width: 177px;
                        }
                    }
                }

                .title {
                    margin-top: 30px;
                    color: #ffc400;
                    font-size: 20px;
                    font-family: 'Montserrat' ,sans-serif;
                    line-height: 22px;
                    margin-bottom: 17px;
                }

                .pic {
                    margin-bottom: 25px;

                    @media screen and (max-width: 562px){
                        margin-bottom: 45px;
                    }
                }

                .btn {
                    width: 223px;

                    @media screen and (max-width: 562px){
                       width: 300px;
                    }
                    @media screen and (max-width: 320px){
                        width: 260px;
                    }
                }

                @media screen and (max-width: 562px){
                    margin-top: 140px;
                }
                @media screen and (max-width: 320px){
                    margin-top: 100px;
                }
            }
        }
    }
</style>