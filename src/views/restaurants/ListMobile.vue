<template>
    <div class="list-container">
            <div v-if="isMenuOpen" class="menu">
                <div class="menu--title">More</div>
                <div class="menu--nav">
                    <ul class="list">
                        <li class="item">
                            <router-link id="recommendation" to="/recommend/c">Give recommendation</router-link>
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
            <div class="filter-menu" v-if="isFilterOpen">
                <FilterMenu :filterHandler="openFilter"/>
            </div>
            <div v-if="!isMenuOpen && !isFilterOpen" class="content">
                <div class="logo">
                    <img src="../../img/logo-mob.png" alt="">
                </div>
                <div class="search">
                    <SearchMobile :filterHandler="openFilter" :callback="searchByName"/>
                </div>
                <div class="list">
                    <div v-for="r in RESTAURANTS" :key="r.id" class="restaurant">
                        <RestaurantList :ethnicity="ETHNICITY" :restaurant="r"/>
                    </div>
                </div>
            </div>
        <div v-if="!isFilterOpen" class="footer-bar">
            <MenuMobile :callback="openMenu"/>
        </div>
    </div>
</template>

<script>
    import MenuMobile from "../../components/menu/MenuMobile";
    import Input from "../../components/input/Input";
    import SearchMobile from "../../components/headers/SearchMobile";
    import {mapGetters} from "vuex";
    import RestaurantList from "../../components/restaurant/RestaurantList";
    import {createParameters} from "../../helpers/createParameters";
    import FilterMenu from "../../components/filters/FilterMenu";

    export default {
        name: 'ListMobile',
        components: {RestaurantList, SearchMobile, Input, MenuMobile, FilterMenu},
        data() {
            return {
                isMenuOpen: false,
                isFilterOpen: false
            }
        },
        methods: {
            openMenu(value) {
                this.isMenuOpen = value
            },
            openFilter (value) {
               this.isFilterOpen = value
            },
            searchByName (q) {
                return this.$store.dispatch('restaurantsModule/getRestaurantsList', createParameters('', '', q))
            }
        },
        computed: {
            ...mapGetters('restaurantsModule', ['ETHNICITY', 'RESTAURANTS'])
        },
        mounted() {
            this.$store.dispatch('restaurantsModule/getRestaurantsList', createParameters('', '2'))
        }
    }
</script>

<style scoped lang="scss">
    .list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        background: #fdfdfd;
        width: 100%;
        height: 100vh;

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            flex-grow: 1;
            width: 100%;
            position: relative;

            .search {
                margin-bottom: 20px;
            }

            .logo {
                margin-top: 48px;
                margin-bottom: 15px;
                img {
                    width: 127px;
                    height: 32px;
                }
            }

            .list {
                width: 326px;
                height: 460px;
                overflow: auto;
            }

            @media screen and (max-width: 320px) {
                .list {
                    width: 280px;
                }

                .search {
                    width: 280px;
                }
            }
        }

        .filter-menu {
            width: 100%;
            height: 100%;
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
            bottom: 0;
            top: 101%;
        }
    }
</style>