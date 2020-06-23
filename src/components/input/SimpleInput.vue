<template>
    <div class="input-wrapper">
        <input v-model.trim="vModel" :placeholder="placeholder" :name="name"  class="input" type="text">
    </div>
</template>

<script>
    export default {
        name : 'SimpleInput',
        props : {
            placeholder: String,
            vModel: String,
            name: String
        }
    }
</script>

<style scoped lang="scss">
    .input-wrapper {
        margin-bottom: 20px;
        width: 100%;

        .input {
           width: 100%;
            outline: none;
            border: none;
            border-bottom: solid 2px #ffcc00;
            border-radius: 0;
            background: none;
            font-family: "Montserrat", sans-serif;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            color: #ffd800;

            &::placeholder {
                font-size: 16px;
                line-height: 22px;
                color: #ffd800;
                opacity: 1;
                transition: .3s;
            }

            &:focus::placeholder {
                transition: .3s;
                opacity: 0;
            }

            @media screen and (max-width: 414px) {
                width: 100%;
                font-size: 14px;

                &::placeholder {
                    font-size: 14px;
                }
            }
            @media screen and (max-width: 320px) {
                width: 100%;
                font-size: 15px;
                &::placeholder {
                    font-size: 15px;
                }
            }
        }
    }

</style>