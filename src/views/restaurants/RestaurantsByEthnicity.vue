<template>
    <div class="restoFilter-container">
        <div>
            <HeaderSearch placeholder="ASK mama" menuRight="136px" iconLeft="740px" width="500px"/>
        </div>
        <div class="content">
            <div class="choice">
                <div class="ethnicity">
                    <div v-for="etn in selectedEthnicity" :id="etn.id"  v-bind:key="etn.id" class="flags">
                        <img src="https://cdn.webshopapp.com/shops/94414/files/53540366/belarus-flag-icon-free-download.jpg" alt="">
                    </div>
                    <div class="btn">
                        <div class="pic"><img src="../../img/all.png" alt=""></div>
                        <button>View All</button>
                    </div>
                    <div class="btn">
                        <div class="pic"><img src="../../img/filter.png" alt=""></div>
                        <button>
                            Filter
                        </button>
                    </div>
                </div>
                <div class="viewVariants">
                    <button>List</button>
                    <button  class="btn-map">Map</button>
                    <button >Both</button>
                </div>
            </div>

            <div class="list">
                <div class="restaurants">
                    <RestaurantList v-for="r in restaurantsByEthnicity" :restaurant="r" v-bind:key="r.id" />
                </div>
                <div class="map">
                    <Map />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import HeaderSearch from "../../components/headers/HeaderSearch";
    import {mapState} from "vuex";
    import RestaurantList from "../../components/restaurant/RestaurantList";
    import Map from "../../components/map/Map";

    export default {
        name: 'RestaurantsByEthnicity',
        components: {Map, HeaderSearch, RestaurantList},
        /*data () {
            return {
                isList: false,
                isMap: false,
                isBoth: true
            }
        },*/
        computed: {
            ...mapState("restaurantsModule", {
                selectedEthnicity: state => state.selectedEthnicity,
                restaurantsByEthnicity: state => state.restaurantsByEthnicity
            })
        },
        /*methods: {
            setList: (value) => {
                console.log(value)
                this.isList == value
            },
            setMap: (value) => {
                return this.isMap == value
            },
            setBoth: (value) => {
                return this.isBoth == value
            }
        }*/
    }
</script>

<style scoped lang="scss">
    .restoFilter-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        .content {
            display: flex;
            flex-direction: column;
            padding: 14px 0 57px 0;

            .choice {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ethnicity {
                    display: flex;
                    margin-left: 138px;
                    margin-bottom: 15px;

                    .flags {
                        width: 35px;
                        height: 23px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .btn {
                        display: flex;
                        position: relative;
                        margin-left: 12px;
                        button {
                            outline: none;
                            background: none;
                            border: none;
                            color: #fecc2f;
                            font-family: "Montserrat", sans-serif;
                            font-size: 10.5px;
                            line-height: 10.5px;

                            &:hover {
                                cursor: pointer;
                            }
                        }

                        .pic {
                            position: absolute;
                            top: -2px;
                            left: -8px;
                            img {

                            }
                        }
                    }
                }

                .viewVariants {
                    margin-right: 138px;
                    margin-bottom: 15px;
                    border: 3px solid #ffcc00;
                    border-radius: 15px;
                    height: 28px;

                    button {
                        outline: none;
                        background: none;
                        border: none;
                        font-family: "Montserrat", sans-serif;
                        font-size: 10.5px;
                        line-height: 10.5px;
                        color: #ffcc00;
                        height: 100%;
                        &:hover, &:active, &:focus {
                            cursor: pointer;
                            background: #ffcc00;
                            color: #fd3c1d;
                        }
                    }

                    .btn-map {
                        outline: none;
                        background: none;
                        border-left: 3px solid #ffcc00;
                        border-right: 3px solid #ffcc00;
                        font-family: "Montserrat", sans-serif;
                        font-size: 10.5px;
                        line-height: 10.5px;
                        color: #ffcc00;
                        height: 100%;
                        &:hover, &:active, &:focus {
                            cursor: pointer;
                            background: #ffcc00;
                            color: #fd3c1d;

                        }
                    }
                }
            }

           .list {
                display: flex;

               .restaurants {
                   width: 268px;
                   height: 370px;
                   background: #8a98ba;
                   margin-left: 138px;
                   margin-right: 19px;
                   display: flex;
                   flex-direction: column;
                   overflow-y: auto;
               }

               .map {
                   width: 397px;
                   height: 370px;
                   background: green;
                   margin-right: 138px;
               }
            }


        }
    }
</style>