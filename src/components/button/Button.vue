<template>
    <div class="button-wrapper">
        <button>{{name}}</button>
    </div>
</template>

<script>

    export default {
        name: 'Button',
        props: {
            name: String
        }
    }

</script>


<style scoped lang="scss">
    .button-wrapper {
        button {
            height: 30px;
            width: 100%;
            outline: none;
            border: none;
            border-radius: 30px;
            background: #ffcc00;
            color: #fd3c1d;
            transition: .3s;
            /*@font-face {
                    font-family: 'Proxima Nova';
                    src: local('Proxima Nova Bold.ttf');
                    font-weight: 700;
                    font-style: normal;
                    font-size: 12px;
                    lineheight: 16.5px;
            }*/

            &:active, &:focus {
                transition: .3s;
                background: #fd3c1d;
                color: #ffd800;
            }

            &:hover {
                cursor: pointer;
            }
        }

    }

</style>