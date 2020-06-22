<template>
    <div class="ethnicity-container">
        <div>
            <Header/>
        </div>
        <div class="content">
            <div class="backArrow">
                <BackArrow path="/homepage"/>
            </div>
            <div class="popup-outer" v-if="isPopupOpen">
                <div class="popup" v-if="isPopupOpen">
                    <Popup :callback="setIsOpen"/>
                </div>
            </div>

            <div class="inner">
                <div class="title">
                    What ethnicity do you <br>
                    most identify with?
                </div>
                <div class="ethnicity">
                    <div class="ethnicity--lang" >
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>
                        <div class="cuisine">
                            <div class="flag"><img src="../../img/japan.png" alt=""></div>
                            <div class="name">Ethnicity 1</div>
                        </div>

                    </div>
                    <div class="ethnicity--alph">
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                        <div class="letter">A</div>
                    </div>
                </div>
                <div class="btn">
                    <button v-on:click="setIsOpen(true)">
                        Why do we need to know this?
                    </button>
                </div>
                <div class="paginator">
                    <img src="../../img/pagination-mob.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/headers/Header";
    import BackArrow from "../../components/button/BackArrow";
    import Popup from "../../components/popup/Popup";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'EthnicityPage',
        components: {Header, BackArrow, Popup},
        data() {
            return {
                isPopupOpen: false
            }
        },
        computed: {
            ...mapGetters('restaurantsModule', ['ETHNICITY'])
        },
        methods: {
            setIsOpen(value) {
                return this.isPopupOpen = value
            }
        },
        mounted () {
            this.$store.dispatch('restaurantsModule/getEthnicityList')
        }
    }
</script>

<style scoped lang="scss">
    .ethnicity-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        .content {
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .popup-outer {
                position: absolute;
                z-index: 1001;
                top: -60px;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, .5);

                .popup {
                    position: absolute;
                    z-index: 5;
                    top: 170px;
                    left: 341px;
                }

                @media screen and (max-width: 414px) {
                    .popup {
                        top: 264px;
                        left: 39px;
                    }
                }
                @media screen and (max-width: 375px) {
                    .popup {
                        top: 264px;
                        left: 19px;
                    }
                }
                @media screen and (max-width: 360px) {
                    .popup {
                        left: 12px;
                    }
                }
                @media screen and (max-width: 320px) {
                    .popup {
                        top: 214px;
                        left: 19px;
                    }
                }
            }


            .backArrow {
                position: absolute;
                top: 20px;
                left: 33px;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }

                @media screen and (max-width: 414px) {
                    top: 60px;
                    left: 0;
                }

                @media screen and (max-width: 320px) {
                    top: 60px;
                    left: -10px;
                }
            }

            .inner {
                margin-top: 32px;

                .title {
                    font-family: "Montserrat", sans-serif;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 22px;
                    color: #ffcc00;
                    margin-bottom: 20px;
                }

                .ethnicity {
                    display: flex;
                    height: 259px;


                    ::-webkit-scrollbar { /* chrome based */
                        width: 0; /* ширина scrollbar'a */
                        background: transparent; /* опционально */
                    }

                    -ms-overflow-style: none; /* IE 10+ */
                    scrollbar-width: none; /* Firefox */

                    &--lang {
                        display: flex;
                        flex-direction: column;
                        overflow-y: auto;
                        font-size: 15.5px;
                        font-family: "Montserrat", sans-serif;
                        line-height: 51.5px;
                        color: #ffcc00;
                        margin-right: 60px;

                        .cuisine {
                            display: flex;

                            .flag {
                                margin-right: 20px;
                                img {
                                    width: 40px;
                                    height: 25px;
                                }
                            }
                        }
                    }

                    &--alph {
                        display: flex;
                        flex-direction: column;
                        overflow-y: auto;
                        font-size: 11.5px;
                        font-family: "Montserrat", sans-serif;
                        line-height: 20.5px;
                        color: #ffcc00;
                        margin-left: 60px;

                        .letter {
                        }
                    }

                    @media screen and (max-width: 414px) {
                        height: 460px;
                        margin-bottom: 35px;


                        &--lang {
                            font-size: 15.68px;
                            line-height: 59.72px;
                            margin-right: 75px;
                            margin-left: 54px;
                        }
                        &--alph {
                            font-size: 12.01px;
                            line-height: 18.35px;
                            margin-left: 85px;
                        }
                    }
                    @media screen and (max-width: 376px) {

                        margin-bottom: 25px;


                        &--lang {
                            font-size: 13px;
                            line-height: 49.72px;
                            margin-right: 68px;
                            margin-left: 40px;
                        }
                        &--alph {
                            font-size: 10.5px;
                            line-height: 18.35px;
                            margin-left: 85px;
                        }
                    }

                    @media screen and (max-width: 360px) {
                        height: 393px;
                        margin-bottom: 25px;


                        &--lang {
                            font-size: 15px;
                            width: 150px;
                            line-height: 50.72px;
                            margin-right: 30px;
                            margin-left: 40px;
                        }
                        &--alph {
                            font-size: 12.01px;
                            line-height: 18.35px;
                            margin-left: 85px;
                        }
                    }


                    @media screen and (max-width: 320px) {
                        height: 318px;
                        margin-bottom: 17px;

                        &--lang {
                            font-size: 13.68px;
                            line-height: 46.72px;
                            margin-right: 0px;
                            margin-left: 38px;
                        }
                        &--alph {
                            font-size: 9.5px;
                            line-height: 18.35px;
                            margin-left: 85px;
                        }
                    }
                }

                .btn {
                    margin-top: 23px;

                    button {

                        outline: none;
                        border: none;
                        background: none;
                        color: #ffd900;
                        font-family: "Montserrat", sans-serif;
                        font-size: 12.5px;
                        line-height: 12.5px;
                        font-weight: bold;
                        border-bottom: 1px solid #ffcc00;

                        &:hover, &:active, &:focus {
                            cursor: pointer;
                        }
                    }

                    @media screen and (max-width: 414px) {
                        margin-top: 0;
                        button {
                            font-size: 16.68px;
                        }
                    }
                    @media screen and (max-width: 376px) {
                        margin-top: 0;
                        button {
                            font-size: 14.68px;
                        }
                    }
                    @media screen and (max-width: 320px) {
                        margin-top: 0;
                        button {
                            font-size: 13.68px;
                        }
                    }
                }

                .paginator {
                    margin-top: 31px;
                }
            }

            @media screen and (max-width: 414px) {
                padding: 0 20px;
                justify-content: center;
                margin-top: 0;
            }
            @media screen and (max-width: 320px) {
                padding: 0 0;
                justify-content: center;
                margin-top: 0;
            }
        }
    }
</style>

<!--
etn.filter((e, i) => {if(i < etn.length - 1) {return e.charAt(0) !== etn[i + 1].charAt(0)} return e}).map((i) => i.charAt(0))-->
