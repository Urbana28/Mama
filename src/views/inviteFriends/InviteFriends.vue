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
            <div class="content--subtitle">
                MAMA Loves your friends, so spread the love.
            </div>
            <div class="content--subtitle-mob">
                MAMA <br> Loves your friends, so spread the love.
            </div>
            <div class="content--pic">
                <img src="../../img/MAMA_Invite.png" alt="">
            </div>
            <div class="form">
                <div v-for="i in inputs" class="input-wrapper">
                    <SimpleInput :name="i.name" :placeholder="i.placeholder"/>
                </div>
                <div class="add-btn">
                    <div class="add-btn--circle">
                    </div>
                    <button v-on:click="addInput">+ Add Another Friend</button>
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
        components: {Button, Header, SimpleInput, BackArrow},
        data () {
            return {
                inputs : [
                    {
                        placeholder: "Friend #1 email or phone number",
                        name: 'Friend1',
                        value: ''
                    },
                    {
                        placeholder: "Friend #2 email or phone number",
                        name: 'Friend2',
                        value: ''
                    }
                ]
            }
        },
        methods : {
            addInput () {
                let newInput = {name: `Friend${this.inputs.length + 1}`, value: '',
                    placeholder: `Friend #${this.inputs.length+1} email or phone number`}
                    this.inputs = [...this.inputs, newInput]
            }
        }
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
            justify-content: space-between;
            width: 100%;

            .backArrow {
                position: absolute;
                top: 21px;
                left: 32px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px) {
                    top: 16px;
                    left: -5px;
                }
            }

            &--title {
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: 'Montserrat', sans-serif;
                font-size: 18px;
                font-weight: bold;
                line-height: 23px;
                text-align: center;
                color: #ffcc00;
            }

            &--subtitle {
                font-family: 'Lato', sans-serif;
                font-size: 20.35px;
                line-height: 22.7px;
                color: #ffcc00;

                @media screen and (max-width: 414px){
                    display: none;
                }
                @media screen and (max-width: 320px){
                    display: none;
                }
            }

            &--subtitle-mob {
                display: none;

                @media screen and (max-width: 414px){
                    display: block;
                    font-family: 'Lato', sans-serif;
                    font-size: 23.35px;
                    line-height: 26.7px;
                    color: #ffcc00;
                    width: 218px;
                    margin-bottom: 20px;
                }
                @media screen and (max-width: 320px){
                    display: block;
                    font-size: 21px;
                    line-height: 23.7px;
                    width: 196px;
                }
            }

            &--pic {
                margin-bottom: 20px;
            }

            .form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 403px;

                .input-wrapper {
                    width: 100%;
                }

                .add-btn {
                    text-align: center;
                    position: relative;
                    margin-top: -7px;
                    width: 100%;

                    .add-btn--circle {
                        position: absolute;
                        top: 4px;
                        left: 137px;
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
                        font-size: 11.5px;
                        font-family: "Montserrat", sans-serif;
                    }
                }

                @media screen and (max-width: 414px){
                    width: 350px;
                    margin-bottom: 20px;

                    .input-wrapper {
                        width: 300px;
                    }

                    .add-btn {
                        width: 300px;

                        .add-btn--circle {
                            left: 72px;
                        }

                        button {
                            font-size: 14px;
                        }
                    }
                }

                @media screen and (max-width: 325px){
                    width: 310px;
                    margin-bottom: 10px;


                    .input-wrapper {
                        width: 260px;
                    }

                    .add-btn {
                        width: 260px;

                        .add-btn--circle {
                            left: 52px;
                        }
                    }
                }
            }

            &--button {
                width: 223px;
                margin-bottom: 80px;

                @media screen and (max-width: 414px) {
                    width: 300px;
                }
                @media screen and (max-width: 320px) {
                    width: 250px;
                }
            }

        }
    }

</style>