<template>
    <div class="invite-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/homepage"/>
            </div>
            <div class="content--title">
                Invite Friend
            </div>
            <div class="form">
                <div class="input-wrapper">
                    <SimpleInput placeholder="Friend #1 email or phone number "/>
                </div>
                <div class="input-wrapper">
                    <SimpleInput placeholder="Friend #2 email or phone number "/>
                </div>
                <div class="input-wrapper">
                    <SimpleInput placeholder="Friend #3 email or phone number "/>
                </div>
                <div class="add-btn">
                    <div class="add-btn--circle">
                    </div>
                    <button>+ Add Another Friend</button>
                </div>
            </div>
            <div class="content--button">
                <Button name="Invite friends"/>
            </div>
        </div>
    </div>
</template>


<script>
    import Header from "../../components/headers/Header";
    import Button from "../../components/button/Button";
    import SimpleInput from "../../components/input/SimpleInput";
    import BackArrow from "../../components/button/BackArrow";

    export default {
        name: 'InviteFriends',
        components: {Button, Header, SimpleInput, BackArrow}
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

            &--title {
                margin-top: 20px;
                margin-bottom: 59px;

                font-family: ProximaNova, sans-serif;
                font-size: 18px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 23px;
                letter-spacing: normal;
                text-align: center;
                color: #ffcc00;
            }

            .form {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                margin: 0 auto;

                .add-btn {
                    position: relative;
                    margin-top: -18px;

                    .add-btn--circle {
                        position: absolute;
                        top: 2.5px;
                        left: 3.5px;
                        border: 1px solid #ffcc00;
                        border-radius: 100%;
                        width: 12px;
                        height: 12px;
                    }

                    button {
                        border: none;
                        outline: none;
                        background: none;
                        color:  #ffcc00;
                    }
                }
            }

            &--button {
                margin: 171px auto;
                width: 223px;
            }

            @media screen and (max-width: 562px) {
                width: 100%;

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