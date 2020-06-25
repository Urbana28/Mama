<template>
    <div class="filter-container">
        <div class="content">
            <div class="title">
                <div class="icon"><img src="../../img/back-button-mob.jpg" alt=""></div>
                <div>Filter</div>
                <div class="close-icon" v-on:click="filterHandler(false)"><img src="../../img/closeIcon.jpg" alt=""></div>
            </div>
            <div class="inner">
                <div class="ethnicity">
                    Select Category
                    <div class="list">
                        <div class="all">
                            <img src="../../img/globe.png" alt="">
                            View All
                        </div>
                        <div class="ethnicity-button" v-for="e in ETHNICITY">
                            <div><img :src="e.flag" alt=""></div>
                            <div>{{e.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="price-category">
                    <div class="span-price">
                        Price
                    </div>
                    <button>$</button>
                    <button>$$</button>
                    <button>$$$</button>
                    <button>$$$$</button>
                </div>
            </div>
            <div class="buttons">
                <button>Reset</button>
                <button>Apply</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'FilterMenu',
    props : {
        filterHandler: Function
    },
    computed: {
        ...mapGetters('restaurantsModule', ['ETHNICITY'])
    },
    mounted () {
        return this.$store.dispatch('restaurantsModule/getEthnicityList')
    }
}
</script>

<style scoped lang="scss">
    .filter-container {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-grow: 1;
        background: #fdfdfd;

        .content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            .title {
                position: absolute;
                top: 35px;
                font-family: "Montserrat", sans-serif;
                font-size: 25px;
                font-weight: bold;
                color: black;
                line-height: 34px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;

                .icon {
                    img {
                        height: 30px;
                        width: 17px;
                    }
                }

                .close-icon {
                    img {
                        height: 34px;
                    }
                }

                @media screen and (max-width: 320px) {
                        font-size: 20px;
                    top: 25px;
                    .icon {
                        img {
                            height: 25px;
                            width: 15px;
                        }
                    }
                    .close-icon {
                        img {
                            height: 30px;
                        }
                    }
                }
            }

            .inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .ethnicity {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    font-size: 20px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: bold;
                    color: black;
                    margin-bottom: 30px;

                    .list {
                        margin-top: 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        flex-wrap: wrap;
                        font-size: 14px;
                        font-family: "Montserrat", sans-serif;
                        font-weight: normal;
                        padding: 0 15px;
                        color: black;
                        height: 235px;
                        overflow-y: auto;

                        .all {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 33.3%;
                            padding-top: 25px;
                            transition: .3s;
                            img {
                                width: 25px;
                                height: 25px;
                                margin-bottom: 15px;
                            }
                            &:hover {
                                background: #ffcc00;
                                border-radius: 10px;
                                color: #ff3c00;
                                transition: .3s;
                            }
                        }
                        .ethnicity-button {
                            width: 33.3%;
                            padding-top: 20px;
                            transition: .3s;

                            img {
                                width: 50px;
                                height: 35px;
                            }

                            &:hover, &:active, &:focus {
                                background: #ffcc00;
                                border-radius: 10px;
                                color: #ff3c00;
                                transition: .3s;
                            }
                        }
                    }

                    @media screen and (max-width: 320px){
                        font-size: 17px;

                        .list {
                            font-size: 12px;
                        }
                    }
                }

                .price-category {
                    font-family: "Montserrat", sans-serif;
                    font-size: 20px;
                    font-weight: bold;
                    color: black;
                    button {
                        width: 55px;
                        height: 35px;
                        background: none;
                        outline: none;
                        border: none;
                        color: #8a98ba;
                        font-family: "Montserrat", sans-serif;
                        font-size: 11px;
                        font-weight: 500;
                        transition: .5s;
                        margin: 10px 15px;

                        &:hover {
                            cursor: pointer;
                            background: #ffcc00;
                            color: #ff3c00;
                            transition: .5s;
                            border-radius: 4px;
                            box-shadow: 0 10px 114px 0 rgba(0, 0, 0, 0.05);
                        }

                         &:focus {
                            background: #ffcc00;
                            color: #ff3c00;
                            transition: .5s;
                            box-shadow: 0 10px 114px 0 rgba(0, 0, 0, 0.05);
                            border-radius: 4px;
                        }
                    }

                    @media screen and (max-width: 320px){
                        font-size: 17px;
                        button {
                            width: 50px;
                            height: 30px;
                            margin: 10px 10px;
                            font-size: 10px;
                        }
                    }
                }

            }
            .buttons {
                position: absolute;
                bottom:50px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 17px;
                button {
                    width: 150px;
                    height: 43px;
                    outline: none;
                    border: 4px solid #ffcc00;
                    background: none;
                    border-radius: 30px;
                    color: #fecc2f;
                    font-family: "Montserrat", sans-serif;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 34px;
                    transition: .3s;

                    &:hover, &:active, &:focus {
                        background: #ffcc00;
                        color: #ff3c00;
                        cursor: pointer;
                        transition: .3s;
                    }
                }

                @media screen and (max-width: 375px) {
                    bottom: 30px;
                }

                @media screen and (max-width: 320px) {
                    button {
                        width: 120px;
                        height: 37px;
                        border: 3px solid #ffcc00;
                        font-size: 15px;
                        line-height: 28px;
                    }
                }
            }
        }
    }
</style>