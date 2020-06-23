<template>
    <div class="list-container">
        <transition mode="out-in">
            <div v-if="isMenuOpen" class="menu">
                <div class="menu--title">More</div>
                <div class="menu--nav">
                    <ul class="list">
                        <li class="item">
                            <router-link id="recommendation" to="/recommendA">Give recommendation</router-link>
                        </li>
                        <li class="item">
                            <router-link id="invite" to="/inviteFriends">Invite Friends</router-link>
                        </li>
                        <li class="item">
                            <router-link id="settings" to="#">Settings</router-link>
                        </li>
                        <li class="item">
                            <router-link id="about" to="/about">About</router-link>
                        </li>
                        <li class="item">
                            <router-link id="saved" to="#">Saved Restaurants</router-link>
                        </li>
                        <li class="terms">
                            <router-link to="#">Terms & Conditions</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="!isMenuOpen" class="content">
                <div class="logo">
                    <img src="../../img/logo-mob.png" alt="">
                </div>
                <div class="search">
                    <SearchMobile :callback="searchRestaurant"/>
                </div>
                <div v-if="searchedRestaurants == null" class="list">
                    <div v-for="r in restaurants" class="restaurant">
                        <RestaurantList :restaurant="r"/>
                    </div>
                </div>
                <div v-if="searchedRestaurants != null" class="list">
                    <div v-for="r in searchedRestaurants" class="restaurant">
                        <RestaurantList :restaurant="r"/>
                    </div>
                </div>
            </div>
        </transition>
        <div class="footer-bar">
            <MenuMobile :callback="openMenu"/>
        </div>
    </div>
</template>

<script>
    import MenuMobile from "../../components/menu/MenuMobile";
    import Input from "../../components/input/Input";
    import SearchMobile from "../../components/headers/SearchMobile";
    import {mapMutations, mapState} from "vuex";
    import RestaurantList from "../../components/restaurant/RestaurantList";

    export default {
        name: 'ListMobile',
        components: {RestaurantList, SearchMobile, Input, MenuMobile},
        data() {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            openMenu(value) {
                this.isMenuOpen = value
            },
            ...mapMutations('restaurantsModule', ['searchRestaurant'])
        },
        computed: {
            ...mapState('restaurantsModule', {
                restaurants: state => state.restaurants,
                searchedRestaurants: state => state.searchedRestaurants
            })
        }
    }
</script>

<style scoped lang="scss">
    .list-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: pink;
        position: relative;
        width: 100%;
        height: 100%;

        .content {
            display: flex;
            flex-direction: column;
            width: 100%;

            transition: 3s;

            .search {
                margin-bottom: 30px;
            }

            .logo {
                margin-top: 40px;
                margin-bottom: 35px;

                img {
                    width: 127px;
                    height: 32px;
                }
            }

            .list {
                width: 326px;
                height: 460px;
                overflow: auto;
                margin: 0 auto 11px;
            }
        }

        .menu {
            background: white;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: opacity 3s ease;

            &--title {
                font-family: "Montserrat", sans-serif;
                font-weight: bold;
                margin-top: 50px;
                margin-bottom: 120px;
            }

            &--nav {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;

                .list {
                    list-style: none;
                    padding-left: 0;

                    .item {
                        margin-bottom: 16px;
                        border-radius: 30px;
                        background-color: #ffcc00;
                        width: 223px;
                        font-size: 14px;
                        font-family: "Montserrat", sans-serif;
                        padding: 7.5px;
                        transition: .3s;

                        a {
                            text-decoration: none;
                            color: #ff3c00;
                        }

                        &:hover, &:active, &:focus {
                            background-color: #ff3c00;
                            cursor: pointer;
                            transition: .3s;

                            a {
                                color: #ffcc00;
                            }
                        }
                    }

                    .terms {
                        background: none;

                        a {
                            text-decoration: none;
                            color: #b6bed4;
                            font-family: "Montserrat", sans-serif;
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                }
            }
        }

        .footer-bar {
            position: absolute;
            z-index: 50;
            width: 100%;
            left: 0;
            right: 0;
            top: 90.1%;
        }
    }
</style>