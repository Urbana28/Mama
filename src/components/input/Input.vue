<template>
    <div class="input-wrapper">
        <input
                :placeholder="placeholder"
                class="input" type="text"
                @input="onChangeHandler($event.target.value)"
        >
        <div class="input-icon">
            <img :src="require(`../../img/${img}`)" alt="">
        </div>
    </div>
</template>

<script>
        export default {
            name : 'Input',
            props : {
                placeholder: String,
                img: String,
                vModel: String,
                onChangeHandler: Function
            },

            methods: {
                onChange: () => {

                }
        }
        }
</script>

<style scoped lang="scss">
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
</style>