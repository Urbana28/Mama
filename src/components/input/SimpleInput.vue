<template>
    <div class="input-wrapper">
        <input v-model.trim="vModel" :placeholder="placeholder" class="input" type="text">
    </div>
</template>

<script>
    export default {
        name : 'SimpleInput',
        props : {
            placeholder: String,
            vModel: String
        }
    }
</script>

<style scoped lang="scss">
    .input-wrapper {
        margin-bottom: 24px;
        @media screen and (max-width: 440px) {
            width: 100%;
        }


        .input {
            width: 401px;
            outline: none;
            border: none;
            border-bottom: solid 2px #ffcc00;;
            background: none;
            font-family: "Montserrat", sans-serif;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 34px;
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

            @media screen and (max-width: 440px) {
                width: 100%;
            }
            @media screen and (max-width: 320px) {
                width: 100%;
                font-size: 14px;
            }
        }
    }

</style>