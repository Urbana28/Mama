<template>
    <div class="resto" :id="restaurant.id">
        <div class="resto--info">
            <div class="flag"><img src="../../img/japan.png" alt=""></div>
            <div class="info">
                <div class="name">{{restaurant.name}}</div>
                <div class="place">
                    <div class="category">$$</div>
                    <div class="ethnicity">{{restaurant.ethnicity + ','}}</div>
                    <div class="placeName">{{restaurant.address.city}}</div>
                </div>
            </div>
        </div>
        <div class="resto--distance">1.2mi</div>
    </div>
</template>

<script>
    export default {
        name: 'RestaurantList',
        props: {
            restaurant: {
                id: Number,
                img: String,
                name: String,
                priceCategory: String,
                ethnicity: String,
                place: String,
                distance: String
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
                        margin-right: 3px;
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