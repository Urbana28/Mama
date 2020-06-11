<template>
    <div class="waitlist-container">
        <div class="header">
            <router-link to="/about">About</router-link> |
            <router-link to="/waitlist">Join Waitlist</router-link> |
            <router-link to="/login">Login</router-link>
        </div>
        <router-view/>
        <div class="content">
            <form @submit.prevent="onSubmit" class="form">
                <div class="field">
                    <input v-model.trim="email" placeholder="Email" type="text">
                </div>
                <small class="invalidMessage" v-if="$v.email.$dirty && !$v.email.required">Field is required</small>
                <small class="invalidMessage" v-else-if="$v.email.$dirty && !$v.email.email">Incorrect email</small>
                <div class="btn">
                    <Button name="Submit"/>
                </div>
            </form>
            <div class="button">
                <a href="https://www.instagram.com"><img src="../../img/instagram.png" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
 import Button from "../../components/button/Button";
 import {email, required} from "vuelidate/lib/validators";

 export default {
    name:'JoinWaitlist',
     components: {Button},
     data () {
        return {
            email: ''
        }
     },
     validations: {
         email: { required, email}
     },
     methods: {
         onSubmit () {
             if(this.$v.$invalid) {
                 this.$v.$touch()
                 return
             }
             const formData = {
                 email: this.email
             }
             console.log(formData)
         }
     }
}
</script>

<style scoped lang="scss">
        .waitlist-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-grow: 1;

            .header {
                margin-bottom: 149px;
                color: #ffd800;
                font-family: "Montserrat", sans-serif;

                a {
                    text-decoration: none;
                    color: #ffd800;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 700;
                    font-size: 12.5px;
                }

            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;

                .form {
                    margin-bottom: 187px;
                    .field {
                            width: 223px;
                        input {
                            width: 100%;
                            outline: none;
                            border: none;
                            border-bottom: solid 2px #ffcc00;;
                            background: none;
                            font-family: "Montserrat", sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 28px;
                            letter-spacing: normal;
                            text-align: left;
                            color: #ffd800;

                            &::placeholder {
                                font-size: 18px;
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
                    .invalidMessage {
                        color: white;
                        font-family: "Montserrat", sans-serif;
                        font-size: 10.5px;
                        font-weight: 300;
                    }

                    .btn {
                        width: 223px;
                        margin-top: 10px;
                    }
                }
            }
        }
</style>