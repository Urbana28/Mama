<template>
    <div class="container">
        <div class="logo">
            <img class="logo--desk" src="../../img/logo.png" alt="">
        </div>
        <!--<div><ForgotPopup/></div>-->
        <div class="form">
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
                        <small class="invalidMessage" v-if="$v.password.$dirty && !$v.password.required">Field is required</small>
                    </div>

                    <div class="button">
                        <Button type="submit" name="Login"/>
                    </div>
                </form>

            <div class="links">
                <div class="link">
                    <router-link to="/waitlist" exact>Join Waitlist |</router-link>
                </div>
                <div class="link">
                    <router-link to="/" exact> Forgot password?</router-link>
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



    export default {
        name: 'LoginForm',
        components: {
            Button, ForgotPopup
        },
        data () {
            return {
                email: '',
                password: ''
            }
        },
        validations: {
            email: { required, email},
            password: { required }
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
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }


    .logo {
        margin-top: 52px;
        margin-bottom: 108px;

        &--mob {
            display: none;
        }
    }


    .form {
        margin-bottom: 180px;

        .fields {
            width: 100%;

            .invalidMessage {
                color: white;
                font-family: "Montserrat", sans-serif;
                font-size: 10.5px;
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
                    font-weight: 300;
                    font-size: 10.5px;
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
                        font-size: 10.5px;
                        line-height: 12px;
                        color: #ffd800;
                        opacity: 1;
                        transition: .3s;
                    }

                    &:focus::placeholder {
                        transition: .3s;
                        opacity: 0;
                    }

                }

                .input-icon {
                    position: absolute;
                    left: 0;
                    top: 11px;
                }
            }
        }

        .button {
            margin-top: 34px;
            width: 223px;
        }

        .links {
            margin-top: 5px;
            display: flex;
            justify-content: center;

            .link {
                padding: 0 2px;

                a {
                    font-family: "Montserrat", sans-serif;
                    font-size: 10.5px;
                    font-weight: 300;
                    line-height: 12px;
                    text-decoration: none;
                    color: #ffd800;;

                    &.router-link-exact-active {
                        color: #42b983;
                    }
                }
            }
        }

        /*@media screen and (max-width: 562px){
            .links {
                height: 24px;
                width: 393px;
                display: flex;
                justify-content: center;
                margin-top: 18px;
                .link {
                    a {
                        font-size: 25px;
                        line-height: 24px;
                    }
                }
            }
        }*/


    }
</style>