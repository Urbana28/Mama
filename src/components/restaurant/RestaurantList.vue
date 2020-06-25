<template>
    <div class="resto" :id="restaurant.id" v-on:click="showOnMap(restaurant.point.lat, restaurant.point.lng)">
        <div class="resto--info">
            <div v-for="e in ethnicity" v-if="e.id === restaurant.ethnicity" class="flag"><img :src="e.flag" alt=""></div>
            <div class="info">
                <div class="name">{{restaurant.name}}</div>
                <div class="place">
                    <div class="category">{{restaurant.price}}</div>
                    <div class="ethnicity">{{restaurant.ethnicity}}</div>
                    <div class="placeName">{{restaurant.address.city}}</div>
                </div>
            </div>
        </div>
        <div class="resto--distance">1.2mi</div>
    </div>
</template>

<script>
    import {createParameters} from "../../helpers/createParameters";

    export default {
        name: 'RestaurantList',
        props: {
            restaurant: {
                id: Number,
                name: String,
                price: Number,
                ethnicity: String,
                address: Object,
                /*distance: String*/
            },
            ethnicity: Array
        },
        methods: {
            showOnMap(lat, lng) {
                debugger
                this.$store.dispatch('restaurantsModule/getRestaurantsList', createParameters('', '', '', lat, lng))
            }
        }
    }
</script>

<style scoped lang="scss">
    .resto {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        border-radius: 5px;
        box-shadow: 0 5px 57px 0 rgba(0, 0, 0, 0.05);
        background-color: #ffffff;
        margin-bottom: 15px;
        height: 52px;

        &:hover {
            cursor: pointer;
        }

        &--info {
            display: flex;
            text-align: left;

            .flag {
                width: 34px;
                height: 23px;
                margin-right: 10px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .info {
                display: flex;
                flex-direction: column;

                .name {
                    font-size: 14px;
                    line-height: 17.5px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: bold;
                    color: black;
                }

                .place {
                    display: flex;
                    font-size: 9px;
                    line-height: 17.5px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: normal;
                    color: #222455;

                    .category {
                        margin-right: 10px;
                    }
                    .ethnicity {
                        margin-right: 5px;
                    }
                }
            }
        }

        &--distance {
            font-size: 9px;
            line-height: 18px;
            color: #8a98ba;
            font-family: "Montserrat", sans-serif;
            font-weight: normal;
        }
    }
</style>