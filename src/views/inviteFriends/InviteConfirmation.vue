<template>
    <div class="invite-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/inviteFriends"/>
            </div>
            <div class="content--titles">
                <div class="invite-title">
                    Invite Friend
                </div>
                <div class="mama-title">
                    MAMA Loves your friends, so <br>
                    spread the love.
                </div>
                <div class="thanks-title">
                    THANKS! Your friends are <br>
                    gonna love MAMA
                </div>
            </div>
            <div class="content--buttons">
                <div class="btn">
                    <Button path="/homepage" name="Go back to list"/>
                </div>
                <div class="btn">
                    <Button path="/recommendA" name="Give Recommendation"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/headers/Header";
    import Button from "../../components/button/Button";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'InviteConfirmation',
        components: {Button, Header, BackArrow}
    }
</script>

<style scoped lang="scss">
    .invite-container {
        display: flex;
        flex-direction: column;
        width: 100%;
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
                    top: 10px;
                    left: 0;
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

            &--titles {
                display: flex;
                flex-direction: column;
                margin-top: 20px;

                .invite-title {
                    font-family: ProximaNova, sans-serif;
                    font-size: 18px;
                    line-height: 23px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 29px;

                    @media screen and (max-width: 562px) {
                        font-size: 24px;
                        margin-bottom: 80px;
                    }
                    @media screen and (max-width: 562px) {
                        font-size: 22px;
                        margin-bottom: 80px;
                    }
                    @media screen and (max-width: 370px) {
                        font-size: 18px;
                    }
                }

                .mama-title {
                    font-family: CooperStd, sans-serif;
                    font-size: 18px;
                    font-weight: 900;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 22.5px;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 47px;

                    @media screen and (max-width: 562px) {
                        font-size: 24px;
                        line-height: 26px;
                    }
                    @media screen and (max-width: 440px) {
                        font-size: 22px;
                        line-height: 26px;
                    }
                    @media screen and (max-width: 370px) {
                        font-size: 18px;
                    }
                }

                .thanks-title {
                    font-family: ProximaNova,sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 23px;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 63px;

                    @media screen and (max-width: 562px) {
                        font-size: 22px;
                        line-height: 26px;
                        margin-bottom: 90px;
                    }
                    @media screen and (max-width: 440px) {
                        font-size: 20px;
                        line-height: 26px;
                        margin-bottom: 90px;
                    }
                    @media screen and (max-width: 370px) {
                        font-size: 16px;
                    }
                }
            }

            &--buttons {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 50px;

                .btn {
                    margin-bottom: 14px;
                    width: 223px;
                }

                @media screen and (max-width: 562px) {
                    width: 100%;

                    .btn {
                        width: 100%;
                    }
                }
            }
        }


        @media screen and (max-width: 562px) {
            padding: 0 20px;
        }
        @media screen and (max-width: 440px) {
            padding: 0 10px;
        }
    }

</style>