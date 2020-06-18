<template>
    <div class="forgot-container">
    <div class="content">
        <form class="content--form" @submit.prevent="onSendPass">
            <div class="title">Please, enter email</div>
            <div class="input-wrapper">
                <input v-model.trim="email" placeholder="Email" class="input" type="text">
            </div>
            <small class="invalidMessage" v-if="$v.email.$dirty && !$v.email.required">Field is required</small>
            <small class="invalidMessage" v-else-if="$v.email.$dirty && !$v.email.email">Incorrect email</small>
            <div class="btn">
                <button type="submit">Send</button>
                <button v-on:click="callback(false)">Cancel</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    import {email, required} from 'vuelidate/lib/validators'

    export default {
        name: 'ForgotPopup',
        props: {
            callback: Function
        },
        data () {
            return {
                email: ''
            }
        },
        validations: {
            email: {email, required}
        },
        methods: {
            onSendPass () {
                if(this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password
                }
                console.log(formData)
            },
            setIsOpen (value) {
                return this.isPopupOpen = value
            }

        }
    }
</script>

<style scoped lang="scss">
    .forgot-container {
        width: 300px;
        height: 231px;
        background-color: white;
        border: solid 1px #707070;
        border-radius: 6px;

        .content {
            position: relative;
            margin-top: 30px;

            &--form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .invalidMessage {
                    color: #fd3c1d;
                    font-family: "Montserrat", sans-serif;
                    font-size: 11.5px;
                    font-weight: 500;
                }

                .title {
                    font-family: "Montserrat", sans-serif;
                    color: black;
                    font-weight: 600;
                    margin-bottom: 25px;
                }

                .input-wrapper {
                    margin-bottom: 5px;

                    .input {
                        width: 203px;
                        outline: none;
                        border: none;
                        border-bottom: solid 2px #ffcc00;;
                        background: none;
                        font-family: "Montserrat", sans-serif;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 34px;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffd800;

                        &::placeholder {
                            font-size: 14px;
                            line-height: 34px;
                            color: #ffd800;
                            opacity: 1;
                            transition: .3s;
                        }

                        &:focus::placeholder {
                            transition: .3s;
                            opacity: 0;
                        }

                    }
                }

                .btn {
                    display: flex;
                    margin-top: 35px;
                    button {
                        margin: 0 2px;
                        font-family: "Montserrat", sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        height: 30px;
                        width:103px;
                        outline: none;
                        border: none;
                        border-radius: 30px;
                        background: #ffcc00;
                        transition: .3s;
                        color: #fd3c1d;

                        &:active, &:focus {
                            transition: .3s;
                            background-color: #fd3c1d;
                            color: #ffd800;
                        }

                        &:hover {
                            transition: .3s;
                            cursor: pointer;
                            background-color: #fd3c1d;
                            color: #ffd800;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 375px) {
            width: 320px;
            height: 240px;

        }

        @media screen and (max-width: 320px){
            width: 300px;
            height: 230px;
        }

    }
</style>