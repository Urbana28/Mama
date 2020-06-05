<template>
    <div class="container">
        <div class="logo">
            <img class="logo--desk" src="../img/logo.png" alt="">
        </div>
        <div class="form">
            <div class="fields">
                <Input placeholder="Email" img="email.png"/>
                <Input placeholder="Password" img="password.png"/>
            </div>
            <div class="button">
                <Button name="Login"/>
            </div>
            <div class="links">
               <div class="link">
                   <router-link to="/" exact>Join Waitlist |</router-link>
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
    import Input from "../components/input/Input";
    import Button from "../components/button/Button";

    export default {
        name: 'LoginForm',
        components: {
            Button,
            Input
        }
    }
</script>


<style scoped lang="scss">
    .container {
        max-width: 222px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        }


        .logo {
           margin-bottom: 120px;

            &--mob {
                display: none;
            }

       }


        .form {
            width: 100%;

            .fields {
                width: 100%;
            }

            .button {
                margin-top: 45px;
            }
            .links {
                margin-top: 11px;
                display: flex;
                justify-content: center;
                .link {
                    padding: 0 2px;
                    a {
                        font-size: 10.5px;
                        font-weight: normal;
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