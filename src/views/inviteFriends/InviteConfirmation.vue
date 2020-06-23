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
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;


            .backArrow {
                position: absolute;
                top: 22px;
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
                @media screen and (max-width: 320px) {
                    top: 45px;
                    left: 0;
                }
            }

            &--titles {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 34px;

                .invite-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 18px;
                    line-height: 23px;
                    font-weight: bold;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 29px;
                }

                .mama-title {
                    font-family: 'Lato', sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 22.5px;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 47px;
                }

                .thanks-title {
                    font-family: 'Montserrat',sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 23px;
                    text-align: center;
                    color: #ffcc00;
                    margin-bottom: 63px;
                }

                @media screen and (max-width: 414px) {
                    margin-top: 0;
                    .invite-title {
                        font-size: 19px;
                        line-height: 26.6px;
                    }
                    .mama-title {
                        font-size: 23.3px;
                        line-height: 26.6px;
                        width: 188px;
                        margin-bottom: 130px;
                    }
                    .thanks-title {
                        font-size: 16.6px;
                        line-height: 22.6px;
                        margin-bottom: 0;
                    }
                }
                @media screen and (max-width: 320px) {
                    margin-top: 0;
                    .invite-title {
                        font-size: 19px;
                        line-height: 26.6px;
                    }
                    .mama-title {
                        font-size: 21.3px;
                        line-height: 23.6px;
                        width: 188px;
                        margin-bottom: 100px;
                    }
                    .thanks-title {
                        font-size: 15.6px;
                        line-height: 20.6px;
                        margin-bottom: 0;
                    }
                }
            }

            &--buttons {
                display: flex;
                flex-direction: column;
                align-items: center;

                .btn {
                    margin-bottom: 14px;
                    width: 223px;

                    @media screen and (max-width: 414px){
                        width: 300px;
                    }
                    @media screen and (max-width: 320px){
                        width: 260px;
                    }
                }
            }
        }
    }

</style>