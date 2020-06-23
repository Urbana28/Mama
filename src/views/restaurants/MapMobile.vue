<template>
    <div class="map-container">
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
            <div v-else-if="!isMenuOpen" class="content">
            <div class="search">
                <SearchMobile btnLeft="8px" btnRight="15px"/>
            </div>
            <div class="map">
              <Map />
            </div>
            <div class="footer-bar">
                <MenuMobile :callback="openMapMenu"/>
            </div>

        </div>

    </div>
</template>

<script>
    import SearchMobile from "../../components/headers/SearchMobile";
    import MenuMobile from "../../components/menu/MenuMobile";
    import Map from "../../components/map/Map";

    export default {
        name: 'MapMobile',
        components: {
            Map,
            SearchMobile, MenuMobile
        },
        data () {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            openMapMenu (value) {
                console.log('hi')
                this.isMenuOpen = value
            }
        }
    }
</script>

<style scoped lang="scss">
    .map-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

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

        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
            position: relative;

            .search {
                position: absolute;
                z-index: 45;
                left: 42px;
                top: 65px;
            }

            .map {
                width: 408px;
                height: 726px;
            }

            .footer-bar {
                position: absolute;
                z-index: 50;
                width: 100%;
                left: 0;
                right: 0;
                top: 90.5%;
            }
        }
    }
</style>