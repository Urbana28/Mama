<template>
    <div class="homepage-container">
        <div>
            <HeaderSearch placeholder="ASK mama" menuRight="70px" iconLeft="781px" width="535px"/>
        </div>
        <div class="content">
            <div class="inner">
                <div class="choice">
                    <div class="choice--ethnicity">
                        <div class="group">
                            <div class="pic"><img src="../../img/globe.png" alt=""></div>
                            <button class="btn">View All</button>
                        </div>
                        <router-link to="/filtered" v-if="selectedEthnicity === null" v-for="e in ethnicity" v-bind:key="e.id"
                             v-on:click.native="onClickHandler(e.id, e.name)" class="group">
                            <div :id="e.id" class="flag-pic"><img :src="e.img" alt=""></div>
                                <button class="btn-ethn">{{e.name}}</button>
                        </router-link>
                    </div>
                    <div class="choice--price">
                        <div class="span-price">
                            Price
                        </div>
                        <button v-on:click="selectPrice('$')" >$</button>
                        <button v-on:click="selectPrice('$$')" >$$</button>
                        <button v-on:click="selectPrice('$$$')" >$$$</button>
                        <button v-on:click="selectPrice('$$$$')" >$$$$</button>
                    </div>
                </div>
                <div v-if="restaurantsByPrice === null" class="restaurants">
                    <div v-for="r in restaurants">
                        <RestaurantList :restaurant="r" />
                    </div>
                </div>
                <div v-if="restaurantsByPrice !== null" class="restaurants">
                    <div v-for="r in restaurantsByPrice">
                        <RestaurantList :restaurant="r" />
                    </div>
                </div>
                <div class="map">
                    <Map/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderSearch from "../../components/headers/HeaderSearch";
    import {mapActions, mapState} from "vuex";
    import RestaurantList from "../../components/restaurant/RestaurantList";
    import Map from "../../components/map/Map";

    export default {
        components: {Map, RestaurantList, HeaderSearch},

        computed: {
            ...mapState("restaurantsModule", {
                ethnicity: state => state.ethnicity,
                selectedEthnicity: state => state.selectedEthnicity,
                restaurants: state => state.restaurants,
                restaurantsByPrice: state => state.restaurantsByPrice
            })
        },
        methods: {
            selectPrice (value) {
               return this.$store.commit('restaurantsModule/selectPriceCategory', value)
            },
            selectEthnicity(value) {
                return this.$store.commit('restaurantsModule/selectEthnicity', value)
            },
            setRestaurantsByEthnicity (value) {
                console.log('value', value)
                return this.$store.commit('restaurantsModule/setRestaurantsByEthnicity', value)
            },
            onClickHandler (value1,value2) {
                this.setRestaurantsByEthnicity(value2)
            }
        }
    }
</script>

<style scoped lang="scss">
    .homepage-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: white;
        position: relative;

        .content {
            .inner {
                display: flex;
                justify-content: space-between;
                margin-left: 69px;
                margin-right: 69px;
                margin-top: 17px;
                ::-webkit-scrollbar { /* chrome based */
                    width: 0;  /* ширина scrollbar'a */
                    background: transparent;  /* опционально */
                }
                -ms-overflow-style: none;  /* IE 10+ */


                .choice {
                    width: 203px;
                    height: 452px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    &--ethnicity {
                        display: flex;
                        flex-direction: column;

                        margin-top: 35px;
                        padding-left: 10px;

                        .group {
                            position: relative;
                            margin-bottom: 5px;

                            .pic {
                                position: absolute;
                                z-index: 2;
                                top: 4px;
                                left: 8px;

                            }

                            .flag-pic {
                                position: absolute;
                                z-index: 2;
                                top: 4px;
                                left: 5px;

                                img {
                                    height: 13px;
                                    width: 19px;
                                }
                            }

                            .btn-ethn {
                                width: 100%;
                                background: none;
                                outline: none;
                                border: none;
                                font-family: "Montserrat", sans-serif;
                                font-weight: normal;
                                font-size: 10.5px;
                                text-align: left;
                                padding-left: 33px;
                                padding-top: 3px;
                                height: 23px;
                                transition: .3s;

                                &:hover, &:active, &:focus {
                                    cursor: pointer;
                                    background: #ffcc00;
                                    border-radius: 5px;
                                    box-shadow: 0px 10px 114px 0 rgba(0, 0, 0, 0.05);
                                    transition: .3s;
                                }
                            }

                            .btn {
                                width: 100%;
                                background: none;
                                outline: none;
                                border: none;
                                font-family: "Montserrat", sans-serif;
                                font-weight: normal;
                                font-size: 10.5px;
                                text-align: left;
                                padding-left: 33px;
                                padding-top: 5px;

                                &:hover {
                                    cursor: pointer;
                                }
                            }
                        }

                    }

                    &--price {
                        margin-bottom: 100px;

                        .span-price {
                            text-align: left;
                            padding-left: 6px;
                            padding-bottom: 10px;
                            font-family: "Montserrat", sans-serif;
                            font-weight: bold;
                            font-size: 14px;
                            line-height: 17.5px;
                            color: black;
                        }

                        button {
                            width: 47px;
                            height: 29px;
                            background: none;
                            outline: none;
                            border: none;
                            color: #8a98ba;
                            font-family: "Montserrat", sans-serif;
                            font-size: 7px;
                            font-weight: 600;
                            transition: .3s;

                            &:hover {
                                cursor: pointer;
                                background: #ffcc00;
                                color: #ff3c00;
                                transition: .3s;
                                border-radius: 4px;
                                box-shadow: 0px 10px 114px 0 rgba(0, 0, 0, 0.05);
                            }

                            &:active, &:focus {
                                background: #ffcc00;
                                color: #ff3c00;
                                transition: .3s;
                                box-shadow: 0px 10px 114px 0 rgba(0, 0, 0, 0.05);
                                border-radius: 4px;
                            }
                        }
                    }

                    @media screen and (max-width: 414px){
                        display: none;
                    }

                }

                .restaurants {
                    width: 374px;
                    height: 452px;
                    display: flex;
                    flex-direction: column;
                    overflow: auto;

                }

                .map {
                    width: 216px;
                    height: 452px;
                }
            }
        }
    }

</style>