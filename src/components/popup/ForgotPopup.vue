<template>
    <div class="forgot-container">
        <div class="content">
            <form class="content--form" @submit.prevent="onSubmit">
                <div class="input-wrapper">
                    <input v-model.trim="email" placeholder="Email" class="input" type="text">
                </div>
                <small class="invalidMessage" v-if="$v.email.$dirty && !$v.email.required">Field is required</small>
                <small class="invalidMessage" v-else-if="$v.email.$dirty && !$v.email.email">Incorrect email</small>
                <div class="btn">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {email, required} from 'vuelidate/lib/validators'

    export default {
        name: 'ForgotPopup',
        data () {
            return {
                email: ''
            }
        },
        validations: {
            email: {email, required}
        },
        methods: {
            onSubmit () {
                if(this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password
                }
                console.log(formData)
            }
        }
    }
</script>

<style scoped lang="scss">
    .forgot-container {
        width: 265px;
        height: 207px;
        background-color: white;
        border: solid 1px #707070;
        border-radius: 6px;

        .content {
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

                .input-wrapper {
                    margin-bottom: 24px;

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
                    button {
                        font-family: "Montserrat", sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        height: 30px;
                        width: 203px;
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
    }
</style>