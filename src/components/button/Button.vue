<template>
    <div class="button-wrapper">
        <button :style="{ backgroundColor: color }"><router-link :to="{path}">{{name}}</router-link></button>
    </div>
</template>

<script>

    export default {
        name: 'Button',
        props: {
            name: String,
            color: {
                type: String
            },
            path: String
        }
    }

</script>


<style scoped lang="scss">
    .button-wrapper {
        button {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            font-size: 13px;
            height: 30px;
            width: 100%;
            outline: none;
            border: none;
            border-radius: 30px;
            background: #ffcc00;
            transition: .3s;

            a {
                text-decoration: none;
                color: #fd3c1d;
                transition: .3s;
            }

            &:active, &:focus {
                transition: .3s;
                background-color: #fd3c1d;
                a {
                    color: #ffd800;
                    transition: .3s;
                }
            }

            &:hover {
                transition: .3s;
                cursor: pointer;
                background-color: #fd3c1d!important;
                a {
                    color: #ffd800;
                    transition: .3s;
                }
            }

            @media screen and (max-width: 414px){
                height: 33px;
                font-size: 17px;
                line-height: 17px;
            }

            @media screen and (max-width: 320px){
                height: 33px;
                font-size: 15px;
                line-height: 15px;
            }
        }

    }

</style>