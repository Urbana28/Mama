<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <img class="logo--desk" src="../../img/logo.png" alt="">
            </div>
            <div class="logo">
                <img class="logo--mob" src="../../img/logo-mob.png" alt="">
            </div>
            <div class="form">
                <div v-if="isPopupOpen" class="forgot-outer">
                    <div v-if="isPopupOpen" class="forgot">
                        <ForgotPopup :callback="setIsOpen"/>
                    </div>
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="fields">
                        <!-- <Input placeholder="Email" img="email.png" :onChangeHandler="onChangeHandler"/>
                         <Input placeholder="Password" img="password.png"/>-->
                        <div class="input-wrapper">
                            <input v-model.trim="email"
                                   placeholder="Email" class="input" type="text">
                            <div class="input-icon">
                                <img src="../../img/email.png" alt="">
                            </div>
                        </div>
                        <small class="invalidMessage" v-if="$v.email.$dirty && !$v.email.required">Field is required</small>
                        <small class="invalidMessage" v-else-if="$v.email.$dirty && !$v.email.email">Incorrect email</small>

                        <div class="input-wrapper">
                            <input v-model.trim="password"
                                   :class="{invalid: ($v.password.$dirty && !$v.password.required)}"
                                   placeholder="Password" class="input" type="password">
                            <div class="input-icon">
                                <img src="../../img/password.png" alt="">
                            </div>
                        </div>
                        <small class="invalidMessage" v-if="$v.password.$dirty && !$v.password.required">Field is
                            required</small>
                    </div>

                    <div class="button">
                        <Button type="submit" name="Login"/>
                    </div>
                </form>

                <div class="links">
                    <div class="link">
                        <router-link to="/waitlist" exact>Join Waitlist |</router-link>
                    </div>
                    <div class="btn">
                        <button v-on:click="setIsOpen(true)"> Forgot password?</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Button from "../../components/button/Button";
    import {email, required} from 'vuelidate/lib/validators'
    import ForgotPopup from "../../components/popup/ForgotPopup";
    import {authModule} from "../../store/authModule";
    import {mapActions} from "vuex";


    export default {
        name: 'LoginForm',
        components: {
            Button, ForgotPopup
        },
        data() {
            return {
                email: '',
                password: '',
                isPopupOpen: false
            }
        },
        validations: {
            email: {required, email},
            password: {required}
        },
        methods: {
            onSubmit() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password
                }
                console.log(formData)
                this.$store.dispatch('loginUser',{
                    email: this.email,
                    password: this.password
                })
            },
            setIsOpen(value) {
                return this.isPopupOpen = value
            },
            // ...mapActions(['LOGIN_USER'])
        }
    }
</script>


<style scoped lang="scss">

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;

        .content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            .logo {
                margin-top:30px;
                margin-bottom: 55px;

                &--mob {
                    display: none;
                }

                @media screen and (max-width: 414px) {
                    margin-top: 5px;

                    &--mob {
                        display: block;
                        width: 200px;

                    }
                    &--desk {
                        display: none;
                    }
                }

                @media screen and (max-width: 320px) {
                    &--mob {
                        display: block;
                        width: 190px;

                    }
                    &--desk {
                        display: none;
                    }
                }
            }

            .form {

                margin-bottom: 180px;

                .forgot-outer {
                    position: absolute;
                    z-index: 1001;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, .5);

                    .forgot {
                        position: absolute;
                        z-index: 5;
                        top: 192px;
                        left: 327px;
                    }

                    @media screen and (max-width: 414px){
                        .forgot {
                            top: 234px;
                            left: 54px;
                        }
                    }

                    @media screen and (max-width: 375px){
                        .forgot {
                            top: 241px;
                            left: 25px;
                        }
                    }

                    @media screen and (max-width: 360px){
                        .forgot {
                            top: 219px;
                            left: 17px;
                        }
                    }

                    @media screen and (max-width: 320px){
                        .forgot {
                            top: 170px;
                            left: 7px;
                        }
                    }
                }

                .fields {
                    width: 100%;

                    .invalidMessage {
                        color: white;
                        font-family: "Montserrat", sans-serif;
                        font-size: 12.5px;
                        font-weight: 300;
                    }

                    .input-wrapper {
                        display: flex;
                        width: 100%;
                        position: relative;

                        .input {
                            padding: 13px 0 13px 25px;
                            border: none;
                            border-bottom: solid 2px transparent;
                            background: none;
                            transition: .3s;
                            font-family: "Montserrat", sans-serif;
                            font-weight: 400;
                            font-size: 13.5px;
                            line-height: 12px;
                            color: #ffd800;
                            width: 100%;

                            &:active, &:focus {
                                transition: .3s;
                                outline: none;
                                border-bottom: solid 2px #ffcc00;
                            }

                            &:hover {
                                transition: .3s;
                                border-bottom: solid 2px #ffcc00;
                            }

                            &::placeholder {
                                font-size: 13.5px;
                                line-height: 12px;
                                color: #ffd800;
                                opacity: 1;
                                transition: .3s;
                            }

                            &:focus::placeholder {
                                transition: .3s;
                                opacity: 0;
                            }

                            @media screen and (max-width: 414px) {
                                font-size: 17.5px;

                                &::placeholder {
                                    font-size: 17.5px;
                                    line-height: 20px;
                                }
                            }

                        }

                        .input-icon {
                            position: absolute;
                            left: 0;
                            top: 11px;

                            @media screen and (max-width: 411px) {
                                top: 14px;
                            }
                        }

                        @media screen and (max-width: 414px) {
                            margin-bottom: 5px;
                        }
                    }
                }

                .button {
                    margin-top: 34px;
                    width: 303px;

                    @media screen and (max-width: 320px) {
                        width: 265px;
                    }
                }

                .links {
                    margin-top: 5px;
                    display: flex;
                    justify-content: center;

                    .link {
                        padding: 0 2px;

                        a {
                            font-family: "Montserrat", sans-serif;
                            font-size: 12.5px;
                            font-weight: 400;
                            line-height: 12px;
                            text-decoration: none;
                            color: #ffd800;
                        }
                    }

                    .btn {
                        button {
                            outline: none;
                            background: none;
                            border: none;
                            font-family: "Montserrat", sans-serif;
                            font-size: 12.5px;
                            font-weight: 400;
                            line-height: 12px;
                            color: #ffd800;

                            &:hover, &:active, &:focus {
                                cursor: pointer;
                            }
                        }
                    }

                    @media screen and (max-width: 414px){
                        margin-top: 15px;

                        .link {
                            a {
                                font-size: 15.5px;
                            }
                        }
                        .btn {
                            button {
                                font-size: 15.5px;
                            }
                        }
                    }

                    @media screen and (max-width: 320px){
                        margin-top: 15px;

                        .link {
                            a {
                                font-size: 14px;
                            }
                        }
                        .btn {
                            button {
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>